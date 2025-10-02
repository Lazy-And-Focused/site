import type { RouteObject } from 'react-router-dom';

import { lazy } from 'react';

import { App } from '@app/app';

const Home = lazy(() => import('@pages/home'));
const About = lazy(() => import('@pages/about'));
const Projects = lazy(() => import('@pages/projects'));
const NotFound = lazy(() => import('@pages/not-found'));
const Links = lazy(() => import('@pages/links'));

/**
 * Конфигурация маршрута в приложении
 */
export type AppRoute = {
  /** Название для навигации */
  name?: string;
  /** Путь маршрута */
  path: string;
  /** Относящийся к роуту React-компонент */
  element: React.ReactNode;
  /** Дочерние маршруты */
  children?: AppRoute[];
};

export const appRoutes: AppRoute[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { name: 'Главная', path: '/', element: <Home /> },
      { name: 'Проекты', path: 'projects', element: <Projects /> },
      { name: 'О нас', path: 'about', element: <About /> },
      { name: 'Ссылки', path: 'links', element: <Links /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

/**
 * Конвертирует AppRoute в RouteObject для react-router
 */
export const convertToRouteObjects = (routes: AppRoute[]): RouteObject[] => {
  return routes.map(route => ({
    path: route.path,
    element: route.element,
    children: route.children ? convertToRouteObjects(route.children) : undefined,
  }));
};
