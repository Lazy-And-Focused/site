export const STYLE = {
  CONTAINER: [
    'flex h-screen w-full flex-col items-center justify-center',
    'bg-[#418d76] bg-cover bg-center bg-no-repeat px-6 pt-14',
    'shadow-xl dark:bg-[#205848] dark:bg-none lg:px-8',
  ].join(' '),
  CONTENT: {
    WRAPPER: 'mx-auto max-w-2xl py-32 sm:py-48 lg:py-56',
    INNER: 'text-center',
    TITLE:
      'text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl',
    DESCRIPTION: 'mt-8 text-pretty text-lg font-medium text-slate-200 sm:text-xl/8',
    ACTIONS: 'mt-10 flex items-center justify-center gap-6',
  },
} as const;
