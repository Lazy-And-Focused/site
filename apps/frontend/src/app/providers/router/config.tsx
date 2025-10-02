import type { RouteObject } from 'react-router-dom';

import { lazy } from 'react';

import { App } from '@app/app';

const Home = lazy(() => import('@pages/home'));
const About = lazy(() => import('@pages/about'));
const Projects = lazy(() => import('@pages/projects'));
const NotFound = lazy(() => import('@pages/not-found'));
const Links = lazy(() => import('@pages/links'));

/**
 * Конфигурация маршрута приложения
 */
export type AppRoute = {
  /** Название для навигации */
  name?: string;
  /** Путь маршрута */
  path: string;
  /** React-компонент */
  element: React.ReactNode;
  /** Дочерние маршруты */
  children?: AppRoute[];
};

/**
 * Конфигурация всех маршрутов приложения
 */
export const routes: AppRoute[] = [
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
