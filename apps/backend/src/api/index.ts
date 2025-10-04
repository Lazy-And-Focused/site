import Api, {
  METHODS,
  PARAMETERS
} from "./api";

import Bluesky from "./bluesky.api";

export * from "./api";

export const NEWS_API: (new () => Api)[] = [
  Bluesky
];

export const NEWS_API_VARIANTS: string[] = NEWS_API.map(api => api.name.toLowerCase());

export const NEWS_API_OBJECT: Record<string, Api> = Object.fromEntries(
  NEWS_API.map(api =>
    [api.name.toLowerCase(), new api()]));

export const chooseApiParametersByMethod = (method: (typeof METHODS)[number]) => {
  return PARAMETERS[method];
};
