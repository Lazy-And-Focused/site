export const NOT_FOUND_CONFIG = {
  background: {
    light: {
      color: 'bg-[#418d76]',
      image: 'bg-[url("/images/backgrounds/pink.png")]',
    },
    dark: {
      color: 'dark:bg-[#205848]',
      image: 'dark:bg-none',
    },
  },
  parallax: {
    container: {
      globalFactorX: 0.1,
      globalFactorY: 0.1,
    },
    items: [
      {
        factorX: 0.8,
        factorY: 0.5,
        content: 'icon' as const,
      },
      {
        factorX: 0.5,
        factorY: 0.3,
        content: 'title' as const,
      },
      {
        factorX: 0.3,
        factorY: 0.4,
        content: 'description' as const,
      },
      {
        factorX: 0.7,
        factorY: 0.2,
        content: 'button' as const,
      },
    ],
  },
  content: {
    title: 'Без котика!',
    description:
      'Наш пушистик прошерстил весь сайт, но даже его шустрые лапки с острыми коготками не сумели закотить эту страницу!',
    buttonText: 'Na glavnuyu',
  },
} as const;
