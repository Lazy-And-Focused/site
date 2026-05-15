import { ORGANIZATION_SHORT_NAME } from '@shared/lib/constants';

export const HOME_PAGE_CONSTANTS = {
  HERO: {
    TITLE: `Разработка с ${ORGANIZATION_SHORT_NAME}`,
    DESCRIPTION:
      'Мы – команда молодых, очень ленивых, но увлеченных работой энтузиастов, двигуящихся к вершинам этого мира.',
    BACKGROUND: '/images/backgrounds/green.png',
  },
} as const;
