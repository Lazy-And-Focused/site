export const STYLE = {
  MODAL: {
    OVERLAY: 'fixed inset-0 bg-base-200/50 backdrop-blur-sm',
    CONTAINER: 'relative bg-base-100 rounded-box shadow-xl p-6 w-full max-w-sm mx-4',
    TITLE: 'text-lg font-semibold mb-4',
    THEME_OPTION: {
      BASE: 'w-full text-left p-3 rounded-lg border-2 transition-all',
      ACTIVE: 'border-primary bg-primary/10',
      INACTIVE: 'border-base-300 hover:bg-base-200',
    },
    THEME_OPTION_CONTENT: 'flex items-center justify-between',
    THEME_OPTION_NAME: 'font-medium',
    THEME_OPTION_SUB: 'text-sm opacity-70',
    THEME_OPTION_COLOR: {
      EMERALD: 'w-6 h-6 bg-emerald-500 rounded-full',
      FOREST: 'w-6 h-6 bg-green-800 rounded-full',
    },
    CLOSE_BUTTON: 'btn btn-ghost',
    CLOSE_BUTTON_CONTAINER: 'mt-4 flex justify-end',
  },
} as const;