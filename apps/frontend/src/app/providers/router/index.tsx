import { createBrowserRouter } from 'react-router-dom';
import { appRoutes, convertToRouteObjects } from './config';

export const router = createBrowserRouter(convertToRouteObjects(appRoutes));

export type { AppRoute } from './config';

export { appRoutes } from './config';
