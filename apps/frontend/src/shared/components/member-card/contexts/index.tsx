import { createContext } from 'react';

export type HasPrimarySocialsType = {
  [key: string]: { 0: boolean; 1: string };
} | null;

export const HasPrimarySocials = createContext<HasPrimarySocialsType>(null);
