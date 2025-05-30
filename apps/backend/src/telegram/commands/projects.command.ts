import { ICommand } from "../types/command.type";
import { IInteraction } from "../types/interaction.types";
import { KEYS, IProject, DEFAULT } from "types/project.type";

import { Members } from "models/members.model";
import Parser from "database/parse";
import { ILink } from "types/link.type";
import Utility from "../utils/database.command-utility";

const helpJson = JSON.stringify(<IProject>{
  name: "@FOCKUSTY/some-project",
  author: {
    name: "FOCKUSTY",
    role: "CEO",
    description: "Идеальный Друг И Отличный Товарищ.",
    socials: [<ILink>{
      name: "GitHub",
      href: "https://github.com/fockusty"
    }],
    tag: "fockusty"
  }
}, undefined, 2);

const actions = ["add", "update", "delete", "addmulti"];

const help =
  "Учтите, Вы должны передавать участник в типе JSON на следующей строке.\n"
  + "Например:\n/project add\n"
  + helpJson

const addition =
  "\n\nВсе возможные вариации команды:\n" + actions.map(c => "/project " + c).join("\n")
  + "\n\nДля обновления пользователя введите: /project update {{ project name }}\n{{ JSON data }}"
  + "\n\nДля удаления пользователя введите /project delete {{ project name }}";

export const sendHelp = (interaction: IInteraction, prefix: string = "") => {
  return interaction.reply((prefix + "\n") + help + addition, { entities: [{
    offset: (prefix + "\n").length + help.length - helpJson.length,
    length: helpJson.length,
    type: "blockquote"
  }]});
}

const parser = new Parser("projects");

class Command implements ICommand {
  public readonly name = "project";

  public async execute(interaction: IInteraction) {
    new Utility({
      default: DEFAULT,
      keys: KEYS,
      model: Members,
      parser: parser,
      sendHelp: sendHelp
    }).execute(interaction);
  }
}

export default Command;
