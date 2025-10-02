import { createBrowserRouter } from 'react-router-dom';
import { routes, convertToRouteObjects } from './config';

/**
 * Роутер приложения
 */
export const router = createBrowserRouter(convertToRouteObjects(routes));

export type { AppRoute } from './config';

export { routes } from './config';
