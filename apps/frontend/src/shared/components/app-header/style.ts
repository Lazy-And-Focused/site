export const STYLE = {
  CONTAINER: {
    BASE: [
      'fixed z-50 inset-x-0 top-0',
      'px-4 py-3',
      'grid grid-cols-[6rem_minmax(6rem,_1fr)_6rem]',
      'justify-items-center',
      'border-b-2',
      'transition duration-500 ease-in-out',
    ].join(' '),
    SHIFTED: {
      YES: 'border-primary/75 bg-base-100/20 backdrop-blur-md',
      NO: 'border-transparent',
    },
  },
} as const;
