import { ORGANIZATION_SHORT_NAME } from '@shared/lib/constants';

export const PROJECTS_PAGE_CONSTANTS = {
  HERO: {
    TITLE: `Сделано с ${ORGANIZATION_SHORT_NAME}`,
  },
  BROWSER: {
    PLACEHOLDER: 'Выбери любой проект из списка выше',
    LOADING_PLACEHOLDER: 'Загрузка проектов...',
  },
} as const;
