export const STYLE = {
  CONTAINER: 'flex w-full flex-col items-center justify-center px-8 py-16 lg:px-12',
  CONTENT: {
    TITLE: 'text-3xl font-semibold tracking-tight text-base-content sm:text-4xl',
    DESCRIPTION: 'my-8 text-center text-lg text-base-content/40',
  },
  LIST: {
    BASE: [
      'w-full max-w-2xl',
      'mx-auto gap-3 p-6',
      'grid grid-cols-1 justify-start sm:grid-cols-2',
      'text-sm font-medium text-base-content/85 bg-base-content/5',
      'list-inside list-disc rounded-lg',
    ].join(' '),
    ITEM: 'list-none items-center gap-2 transition-colors hover:text-primary hover:underline',
    ITEM_LINK: [
      'w-full min-w-max',
      'flex items-center justify-start ',
      'relative px-4 py-2 gap-2 overflow-hidden',
      'rounded-md hover:bg-base-300/50',
      'text-ellipsis text-nowrap text-left',
    ].join(' '),
  },
  BUTTON: 'btn btn-ghost mt-10 w-full rounded-full text-slate-800 dark:text-slate-200 md:max-w-80',
  HINT: 'mt-12 text-base text-base-content/40',
} as const;
