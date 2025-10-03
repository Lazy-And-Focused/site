import Api, {
  METHODS,
  PARAMETERS
} from "./abstract.api";

import Bluesky from "./bluesky.api";
import Telegram from "./telegram.api";

export * from "./abstract.api";

export const NEWS_API: (new () => Api)[] = [
  Bluesky,
  Telegram
];

export const NEWS_API_VARIANTS: string[] = NEWS_API.map(api => api.name.toLowerCase());

export const NEWS_API_OBJECT: Record<string, Api> = Object.fromEntries(
  NEWS_API.map(api =>
    [api.name.toLowerCase(), new api()]));

export const chooseApiParametersByMethod = (method: (typeof METHODS)[number]) => {
  return PARAMETERS[method];
};
