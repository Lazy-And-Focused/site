export const STYLE = {
  CONTAINER: [
    'flex min-h-screen w-full shadow-xl',
    'flex-col items-center justify-center',
    'px-6 pt-14 lg:px-8',
    'bg-cover bg-center bg-no-repeat',
    // STATIC URL!??!?!?
    // @TODO: Export static url to constant
    "bg-[#418d76] bg-[url('/images/backgrounds/green.png')]",
    'dark:bg-[#205848] dark:bg-none',
  ].join(' '),
  BASE: 'mx-auto max-w-2xl py-16 pt-16 sm:pt-12',
  HEADING: {
    CONTAINER: 'text-center',
    BASE: [
      'mb-8 tracking-tight text-balance',
      'text-5xl font-semibold text-slate-100 sm:text-7xl',
      'drop-shadow-md',
    ].join(' '),
  },
} as const;
