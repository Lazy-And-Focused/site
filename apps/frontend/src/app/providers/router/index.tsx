import { createBrowserRouter } from 'react-router';

import { convertAppRoutesToRouteObjects } from './utils';
import { routerRoutes as appRouterRoutes } from './routers';

const routerRoutes = convertAppRoutesToRouteObjects(appRouterRoutes);
export const router = createBrowserRouter(routerRoutes);

export type { AppRoute } from './types';

export { routerRoutes };
