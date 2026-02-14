export const NOT_FOUND_CONFIG = {
  BACKGROUND: {
    LIGHT: {
      COLOR: 'bg-[#418d76]',
      IMAGE: 'bg-[url("/images/backgrounds/pink.png")]',
    },
    DARK: {
      COLOR: 'dark:bg-[#205848]',
      IMAGE: 'dark:bg-none',
    },
  },
  PARALLAX: {
    CONTAINER: {
      GLOBAL_FACTOR_X: 0.1,
      GLOBAL_FACTOR_Y: 0.1,
    },
    ITEMS: [
      {
        FACTOR_X: 0.8,
        FACTOR_Y: 0.5,
        CONTENT: 'icon' as const,
      },
      {
        FACTOR_X: 0.5,
        FACTOR_Y: 0.3,
        CONTENT: 'title' as const,
      },
      {
        FACTOR_X: 0.3,
        FACTOR_Y: 0.4,
        CONTENT: 'description' as const,
      },
      {
        FACTOR_X: 0.7,
        FACTOR_Y: 0.2,
        CONTENT: 'button' as const,
      },
    ],
  },
  CONTENT: {
    TITLE: 'Без котика!',
    DESCRIPTION:
      'Наш пушистик прошерстил весь сайт, но даже его шустрые лапки с острыми коготками не сумели закотить эту страницу!',
    BUTTON_TEXT: 'Na glavnuyu',
  },
} as const;
