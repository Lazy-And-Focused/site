import { createBrowserRouter } from 'react-router-dom';

import { convertToRouteObjects } from './utils';
import { routerRoutes } from './routers';

export const router = createBrowserRouter(convertToRouteObjects(routerRoutes));

export type { AppRoute } from './types';

export { routerRoutes };
