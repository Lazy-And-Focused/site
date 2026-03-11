import { ORGANIZATION_NAME } from '@/shared/lib/constants';

export const LINKS_PAGE_CONSTANTS = {
  SECTIONS: {
    SOCIAL_LINKS: {
      TITLE: ORGANIZATION_NAME,
      DESCRIPTION: 'Список официальных страниц команды в социальных сетях',
      HINT: 'Пс-с, ты можешь прокрутить ниже',
    },
    TEAM_MEMBERS: {
      TITLE: 'А вот это мы',
      DESCRIPTION: 'Если вы тут впервые, но вам интересна команда, то глядите!',
    },
  },
} as const;
