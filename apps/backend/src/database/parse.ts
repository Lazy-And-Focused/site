import { Document, ObjectId } from "mongoose";

import {
  KEYS as MEMBER_KEYS,
  IMember
} from "types/member.type";
import {
  KEYS as PROJECT_KEYS,
  IProject
} from "types/project.type";
import {
  KEYS as NEWS_KEYS,
  INews
} from "types/news.type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MODELS = [
  "members",
  "projects",
  "news"
] as const;

export type IModels = (typeof MODELS)[number];
const KEYS: Record<IModels, string[]|readonly string[]> = {
  members: MEMBER_KEYS,
  projects: PROJECT_KEYS,
  news: NEWS_KEYS
} as const;

type IAllModels = {
  members: IMember,
  projects: IProject,
  news: INews
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type IDocument<T> = Document<unknown, {}, T, {}> & T & { _id: ObjectId; } & { __v: number; }

class Parser<Model extends IModels> {
  private readonly keys: string[] | readonly string[];
  
  public constructor(public readonly model: Model) {
    this.keys = KEYS[model];
  }

  public execute<T = IAllModels[Model]>(data: T | { [key: string]: unknown } | IDocument<T>): T {
    return Object.fromEntries(this.keys.map((k) => [k, (data as { [key: string]: unknown })[k]])) as T;
  };
}

export { Parser };

export default Parser;
