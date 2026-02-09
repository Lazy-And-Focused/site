export const STYLE = {
  CONTAINER: [
    'flex min-h-full w-full flex-col items-center justify-center',
    'px-6 py-14 lg:px-8',
  ].join(' '),
  LIST: [
    'mx-auto grid w-full max-w-7xl grid-cols-1',
    'justify-items-center gap-x-8 gap-y-12 rounded-lg',
    'bg-base-content/5 p-4 md:grid-cols-2 lg:grid-cols-3',
  ].join(' '),
  LIST_ITEM: 'flex h-max items-stretch',
} as const;
