import { createContext } from 'react';

export type HasPrimarySocialsType = {
  [key: string]: [boolean, string];
} | null;

export const HasPrimarySocials = createContext<HasPrimarySocialsType>(null);
