export const STYLE = {
  LIST: {
    CONTAINER: [
      'mx-auto w-full max-w-2xl list-inside list-disc',
      'space-y-4 rounded-lg bg-base-content/5 p-6',
      'text-sm font-medium text-base-content/85',
    ].join(' '),
    ITEM: 'list-disc',
    DISABLED: 'cursor-not-allowed transition-colors hover:text-primary',
    SUPPLEMENT: 'text-base-content/50',
    LINK: [
      'inline-flex items-center gap-2',
      'transition-colors hover:text-primary hover:underline',
    ].join(' '),
  },
} as const;
