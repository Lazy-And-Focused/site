export const STYLE = {
  CONTAINER: [
    'relative col-span-full',
    'flex flex-col gap-2',
    'w-full max-w-md px-2 py-3',
    'rounded-md bg-primary/15',
  ].join(' '),
  CONTENT: {
    HEADING: 'text-lg font-semibold tracking-tight text-primary-content',
    SOCIALS: {
      CONTAINER: 'grid grid-cols-6 gap-2 rounded-md bg-primary/15 p-1 text-primary',
    },
    DESCRIPTION: 'p-2 text-primary-content/85',
  },
} as const;
