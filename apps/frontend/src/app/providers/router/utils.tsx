import type { AppRoute } from './types';
import type { RouteObject } from 'react-router-dom';

/**
 * Конвертирует AppRoute в RouteObject для react-router
 */
export const convertToRouteObjects = (routes: AppRoute[]): RouteObject[] => {
  return routes.map((route) => ({
    path: route.path,
    element: route.element,
    children: route.children ? convertToRouteObjects(route.children) : undefined,
  }));
};
