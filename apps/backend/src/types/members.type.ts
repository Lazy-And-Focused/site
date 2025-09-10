import { ILink } from "./link.type";

export type IMember = {
  id: string;
  name: string;
  role: string;
  tag: string;

  description: string;
  socials: ILink[];

  avatar?: string;
  meta?: string[];
};

export type ICreateMember = Omit<IMember, "id"|"socials"|"description"|"avatar"|"meta"> & {
  socials?: ILink[],
  description?: string,
  avatar?: string,
  meta?: string[]
};

export const MEMBER_DEFAULT = {
  socials: [],
  description: "",
  avatar: "",
  meta: "",
} as const;

export const MEMBER_REQUIRED = ["name", "role", "tag"] as const;

export const MEMBER_KEYS = [
  ...MEMBER_REQUIRED,

  "description",
  "socials",

  "avatar",
  "meta",
] as const;
