export type INews = {
  id: string;
  name: string;
  author: string;

  /** ISO date format */
  date: string;

  text: string;
  banner?: string;

  icon?: string;
  image?: string;
};

export type ICreateNews = Omit<INews, "date"|"id"> & {
  /** ISO date format */
  date?: string
};

export const NEWS_DEFAULT = {
  banner: "" as const,
  icon: "" as const,
  image: "" as const,
} as const;

export const NEWS_REQUIRED = ["name", "author", "text", "date"] as const;

export const NEWS_KEYS = [...NEWS_REQUIRED, "banner", "icon", "image"] as const;
