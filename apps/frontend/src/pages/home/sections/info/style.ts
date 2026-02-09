export const STYLE = {
  CONTAINER: [
    'flex min-h-screen w-full flex-col items-center justify-center',
    'px-6 py-14 lg:px-8',
  ].join(' '),
  CONTENT: {
    WRAPPER: 'flex max-w-xl flex-col items-center justify-center text-center',
    TITLE: 'text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl',
    DESCRIPTION: 'mt-6 text-lg/8 text-base-content/40',
    ACTIONS: 'mt-8 flex flex-row gap-4',
  },
} as const;
