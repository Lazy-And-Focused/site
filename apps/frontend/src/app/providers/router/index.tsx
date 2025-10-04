import { createBrowserRouter } from 'react-router-dom';

import { convertToRouteObjects } from './config';
import { appRoutes } from './routers/app';

export const router = createBrowserRouter(convertToRouteObjects(appRoutes));

export type { AppRoute } from './types';

export { appRoutes };
