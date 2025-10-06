import { ORGANIZATION_SHORT_NAME } from '@shared/lib/constants';

export const HOME_PAGE_CONSTANTS = {
  hero: {
    title: `Разработка с ${ORGANIZATION_SHORT_NAME}`,
    description:
      'Мы – команда молодых, очень ленивых, но увлеченных работой энтузиастов, двигуящихся к вершинам этого мира.',
    background: '/images/backgrounds/green.png',
  },
} as const;
