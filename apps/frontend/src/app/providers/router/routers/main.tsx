import type { AppRoute } from '../types';

import { About, Home, Links, Projects } from './pages';

export const mainRoutes: AppRoute[] = [
  { name: 'Главная', path: '/', element: <Home /> },
  { name: 'Проекты', path: 'projects', element: <Projects /> },
  { name: 'О нас', path: 'about', element: <About /> },
  { name: 'Ссылки', path: 'links', element: <Links /> },
];
