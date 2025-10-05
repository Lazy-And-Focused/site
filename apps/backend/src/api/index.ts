import Api from "./api";

import Bluesky, { login as blueskyLogin } from "./bluesky";

export * from "./api";

export const INITIALIZATORS = {
  blueskyLogin
};

export const NEWS_API: (new () => Api)[] = [
  Bluesky
];

export const NEWS_API_VARIANTS: string[] = NEWS_API.map(api => api.name.toLowerCase());

export const NEWS_API_OBJECT: Record<string, Api> = Object.fromEntries(
  NEWS_API.map(api =>
    [api.name.toLowerCase(), new api()]));
