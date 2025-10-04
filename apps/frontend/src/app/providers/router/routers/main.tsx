import type { AppRoute } from '../types';

import { AboutPage, HomePage, LinksPage, ProjectsPage } from './lazy';

export const mainRoutes: AppRoute[] = [
  { name: 'Главная', path: '/', element: <HomePage /> },
  { name: 'Проекты', path: 'projects', element: <ProjectsPage /> },
  { name: 'О нас', path: 'about', element: <AboutPage /> },
  { name: 'Ссылки', path: 'links', element: <LinksPage /> },
];
