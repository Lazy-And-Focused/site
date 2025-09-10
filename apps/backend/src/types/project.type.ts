import { ILink } from "./link.type";
import { IMember } from "./member.type";

export type IProject = {
  name: string;

  description: string;
  urls?: ILink[];

  author: IMember;
  contributors: IMember[];

  cover?: string;
  icon_url?: string;
};

export const PROJECT_DEFAULT = {
  contributors: [],
  description: "",
  icon_url: "",
  url: "",
} as const;

export const PROJECT_REQUIRED = ["name", "author"] as const;

export const PROJECT_KEYS = [
  ...PROJECT_REQUIRED,

  "name",
  "description",
  "url",
  "contributors",
  "icon_url",
  "cover",
] as const;
