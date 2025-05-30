export type INews = {
  name: string;
  author: string;

  /** ISO date format */
  date: string;

  text: string;
  banner?: string;

  icon?: string;
  image?: string;
}

export const DEFAULT = {
  banner: "" as const,
  icon: "" as const,
  image: "" as const,
} as const;

export const REQUIRED = [
  "name",
  "author",
  "text",
  "date"
] as const;

export const KEYS = [
  ...REQUIRED,
  "banner",
  "icon",
  "image",
] as const;