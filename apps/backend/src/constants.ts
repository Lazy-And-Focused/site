/**
  * убрать `redonly string[]` после добавления соцсети в массив
 */
export const SOCIALS_API_WITH_URL: readonly string[] = [

] as const;

export const SOCIALS_API = [
  ...SOCIALS_API_WITH_URL,
  "bluesky",
  "telegram"  
] as const;