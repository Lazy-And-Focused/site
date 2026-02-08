export const STYLE = {
  CONTAINER: 'col-span-1 self-center text-center',
  LIST_ITEM: {
    PARENT: [
      'list-none items-center gap-2 transition-colors',
      'hover:text-primary hover:underline',
    ].join(' '),
    LINK: [
      'relative flex w-full min-w-max',
      'items-center justify-start gap-2 px-4 py-2',
      'text-ellipsis text-nowrap text-left',
      'overflow-hidden rounded-md hover:bg-base-300/50',
    ].join(' '),
    LINL_SPAN: 'flex aspect-square h-6 items-center justify-start overflow-clip rounded',
  },
} as const;
