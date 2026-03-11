import { NOT_FOUND_CONFIG } from "./lib/constants";

export const STYLE = {
  MAIN: [
    'h-full max-h-screen w-full overflow-clip bg-cover bg-center bg-no-repeat',
    NOT_FOUND_CONFIG.BACKGROUND.LIGHT.COLOR,
    NOT_FOUND_CONFIG.BACKGROUND.LIGHT.IMAGE,
    NOT_FOUND_CONFIG.BACKGROUND.DARK.COLOR,
    NOT_FOUND_CONFIG.BACKGROUND.DARK.IMAGE,
  ].join(' '),
  ICON: 'mb-14 text-slate-100',
  TITLE: [
    'rotate-12',
    'text-balance text-5xl font-semibold',
    'tracking-tight text-slate-100',
    'drop-shadow-md sm:text-7xl'
  ].join(' '),
  DESCRIPTION: 'mt-8 text-pretty text-lg font-medium',
  BUTTON: [
    'btn btn-outline btn-neutral',
    'mt-8 text-sm/6 font-semibold',
    'transition-opacity hover:opacity-50',
  ].join(' ')
} as const;
