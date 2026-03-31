export const STYLE = {
  CONTAINER: 'flex items-center justify-center',
  LIST_ITEM: {
    PARENT: 'py-1',
    LINK: {
      WRAPPER: 'flex items-center gap-2 text-primary-content hover:text-primary-content/80',
      SPAN: 'flex-shrink-0',
      ICON: 'w-4 h-4',
    },
  },
} as const;