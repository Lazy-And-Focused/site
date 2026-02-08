export const STYLE = {
  CONTAINER: 'flex items-center gap-x-6 rounded bg-primary/15 p-2',
  AVATAR: {
    BASE: 'aspect-square h-auto w-20 overflow-hidden rounded',
    IMAGE: 'h-full w-full',
  },
  CONTENT: {
    CONTAINER: 'mr-2 w-full text-end',
    HEADING: [
      'flex flex-row items-center justify-end gap-x-1',
      'text-base/7 font-semibold tracking-tight text-base-content',
    ].join(' '),
    GENERAL_ROLE: 'line-clamp-1 max-w-full text-sm/6 font-semibold text-primary/75',
  },
} as const;
