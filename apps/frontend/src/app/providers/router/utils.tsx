import type { AppRoute } from './types';
import type { RouteObject } from 'react-router-dom';

/**
 * Конвертирует AppRoute в RouteObject для react-router
 */
export const convertAppRoutesToRouteObjects = (routes: AppRoute[]): RouteObject[] => {
  return routes.map((route) => ({
    path: route.path,
    element: route.element,
    children: route.children ? convertAppRoutesToRouteObjects(route.children) : undefined,
  }));
};
