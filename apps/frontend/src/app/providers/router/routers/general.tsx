import type { AppRoute } from '../types';

import { AboutPage, HomePage, LinksPage, ProjectsPage } from '../lazy-pages';

import { APP_ROUTES } from '@shared/lib/constants';

export const routes: AppRoute[] = [
  { name: 'Главная', path: APP_ROUTES.HOME, element: <HomePage /> },
  { name: 'Проекты', path: APP_ROUTES.PROJECTS, element: <ProjectsPage /> },
  { name: 'О нас', path: APP_ROUTES.ABOUT, element: <AboutPage /> },
  { name: 'Ссылки', path: APP_ROUTES.SOCIALS, element: <LinksPage /> },
];
