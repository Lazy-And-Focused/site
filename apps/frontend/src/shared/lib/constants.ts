import type { HeaderNavLink } from '@shared/components/app-header/types';

// LIBS / UTILS / PACKAGES
export const REACT_APP_ROOT_ID = 'root';

// APP
export const APP_ROUTES = {
  HOME: '/',
  PROJECTS: 'projects',
  ABOUT: 'about',
  SOCIALS: 'links',
} as const;

// TEAM / ORGANIZATION / COMPANY
export const ORGANIZATION_NAME = 'Lazy And Focused';
export const ORGANIZATION_SHORT_NAME = 'LAF';

// UTILITARY FOR COMPONENTS
export const HEADER_LINKS: HeaderNavLink[] = [
  { name: 'Главная', path: APP_ROUTES.HOME },
  { name: 'Проекты', path: APP_ROUTES.PROJECTS },
  { name: 'О нас', path: APP_ROUTES.ABOUT },
];

// В будущем можно добавить (для фетчинга с бэка, например):
// export const API_BASE_URL = import.meta.env.VITE_API_URL;
