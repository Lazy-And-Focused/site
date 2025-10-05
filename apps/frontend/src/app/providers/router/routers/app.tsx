import type { AppRoute } from '../types';

import { App } from '@app/app';
import { NotFoundPage } from './lazy';

import { routes as mainRoutes } from './main';

export const routes: AppRoute[] = [
  {
    path: '/',
    element: <App />,
    children: mainRoutes,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
export { routes as appRoutes }
