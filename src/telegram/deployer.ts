import { env } from "env";

import { readdirSync, existsSync } from "fs";
import { join, resolve } from "path";
import { IDeployData } from "./types/deploy-data.type";

const ignoreErrors = Boolean(env.get("IGNORE_TELEGRAM_DEPLOY_COMMANDS_ERRORS", true));

const datas: IDeployData = {
  commands: new Map(),
  listeners: new Map(),
  help: new Map()
};

class Deployer<
  T extends {
    name: string,
    execute: (...data: any) => any
  }
> {
  private readonly errorStack: Record<"paths"|"datas", Error[]> = { paths: [], datas: [] };
  private readonly datasPath: string | string[]
  private readonly constructorData: any[]
  private readonly type: "commands"|"listeners";
  
  public readonly datasPaths: string[] = [];
  public readonly datas: Map<string, T>

  private initialized = false;  

  public constructor(
    data: {
      datasPath: string | string[],
      datas?: Map<string, T>,
      constructorData?: any[],
      type: "commands"|"listeners"
    }
  ) {
    this.datasPath = data.datasPath;
    this.type = data.type;

    this.datas = data.datas || new Map();
    this.constructorData = data.constructorData || [];
  };

  private readonly resolve = (path: string | string[], ...paths: string[]) => {
    if (Array.isArray(path)) return resolve(join(...path, ...paths));
    else return resolve(join(path, ...paths));
  };

  private readonly CheckErrorStack = (stack: Error[]) => {
    if (stack.length === 0) return;

    const error = new Error(
      `Errors: ${stack.length}. Please, solve them.\n\n` +
      stack.map(e => `${e.name}: ${e.message}`).join("\n")
    );

    if (ignoreErrors) return console.error(error);
    
    throw error;
  }

  private readonly ReadFolder = (path: string|string[] = this.datasPath, paths: string[] = this.datasPaths) => {
    const folder = readdirSync(this.resolve(path));

    for (const file of folder) {
      try {
        const folderPath = this.resolve(path, file)
        readdirSync(folderPath);
      
        this.ReadFolder(folderPath);
      } catch {
        const filePath = this.resolve(path, file);

        if (!existsSync(filePath)) {
          this.errorStack.paths.push(new Error("File at path " + filePath + " is not exists."));
          continue;
        }

        paths.push(filePath)
      }
    }
  }

  private readonly Deploy = (paths: string[] = this.datasPaths) => {
    for (const path of paths) {
      const data = <T>(new (require(this.resolve(path)).default)(...this.constructorData));
      const sendHelp = require(this.resolve(path))?.sendHelp;

      if (!("name" in data && "execute" in data)) {
        this.errorStack.datas.push(new Error("name or execute in file at " + path + " are not exists"));
        continue;
      }

      if (sendHelp) {
        datas.help.set(data.name, sendHelp);
      };

      datas[this.type].set(data.name, data as any);
      this.datas.set(data.name, data);
    }
  }

  public execute() {
    if (this.initialized) throw new Error("This deployer has initialized early.");
    this.initialized = true;

    this.ReadFolder();
    this.CheckErrorStack(this.errorStack.paths);

    this.Deploy()
    this.CheckErrorStack(this.errorStack.datas);

    return this;
  }
}

export {
  datas
};

export default Deployer;
