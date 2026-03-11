export const STYLE = {
  CONTAINER: 'flex w-full h-7 flex-row justify-between gap-4',
  AVATAR: {
    BASE: 'relative -top-12 -mb-10 aspect-squire h-auto w-16 overflow-hidden rounded',
    IMAGE: 'h-full w-full',
  },
  GENERAL_ROLE: [
    'line-clamp-1 max-w-full px-2 py-1',
    'rounded-lg border-2',
    'border-primary/20 bg-primary/10',
    'text-xs font-semibold text-primary/85',
  ].join(' '),
} as const;
