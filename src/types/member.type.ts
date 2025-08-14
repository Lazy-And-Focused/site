import { ILink } from "./link.type";

export type IMember = {
  name: string;
  role: string;
  tag: string;

  description: string;
  socials: ILink[];
  
  avatar?: string;
  meta?: string[];
};

export const DEFAULT = {
  socials: [],
  description: "",
  avatar: "",
  meta: "",
} as const;

export const REQUIRED = [
  "name",
  "role",
  "tag",
] as const;

export const KEYS = [
  ...REQUIRED,
  
  "description",
  "socials",

  "avatar",
  "meta"
] as const;