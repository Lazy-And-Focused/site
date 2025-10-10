import { ORGANIZATION_SHORT_NAME } from '@shared/lib/constants';

export const PROJECTS_PAGE_CONSTANTS = {
  HERO: {
    TITLE: `Сделано с ${ORGANIZATION_SHORT_NAME}`,
  },
  BROWSER: {
    /** Browser's placeholder */
    EMPTY_TEXT: 'Выбери любой проект из списка выше',
  },
} as const;
