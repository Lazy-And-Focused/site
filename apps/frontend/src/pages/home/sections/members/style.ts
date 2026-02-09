export const STYLE = {
  CONTAINER: [
    'flex min-h-screen w-full flex-col items-center justify-center',
    'px-6 py-14 lg:px-8',
  ].join(' '),
  CONTENT: {
    WRAPPER: 'mx-auto grid max-w-7xl gap-16 px-6 md:gap-20 lg:px-8 xl:grid-cols-3',
    TITLE: 'text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl',
    DESCRIPTION: 'mt-6 text-lg/8 text-base-content/40',
    ACTIONS: 'mt-8',
    LIST: 'grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:col-span-2',
  },
} as const;
