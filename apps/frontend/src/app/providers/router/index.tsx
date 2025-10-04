import { createBrowserRouter } from 'react-router-dom';

import { convertToRouteObjects } from './utils';
import { appRoutes } from './routers/app';

export const router = createBrowserRouter(convertToRouteObjects(appRoutes));

export type { AppRoute } from './types';

export { appRoutes };
