import { createBrowserRouter } from 'react-router-dom';

import { convertAppRoutesToRouteObjects } from './utils';
import { routerRoutes } from './routers';

export const router = createBrowserRouter(convertAppRoutesToRouteObjects(routerRoutes));

export type { AppRoute } from './types';

export { routerRoutes };
