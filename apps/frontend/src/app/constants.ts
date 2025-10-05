import type { HeaderNavLink } from '@shared/components/app-header/types';

export const REACT_APP_ROOT_ID = 'root';

export const APP_ROUTES = {
  HOME: '/',
  PROJECTS: 'projects',
  ABOUT: 'about',
  SOCIALS: 'links',
} as const;

export const HEADER_LINKS: HeaderNavLink[] = [
  { name: 'Главная', path: APP_ROUTES.HOME },
  { name: 'Проекты', path: APP_ROUTES.PROJECTS },
  { name: 'О нас', path: APP_ROUTES.ABOUT },
];

// В будущем можно добавить:
// export const API_BASE_URL = import.meta.env.VITE_API_URL;
