import type { AppRoute } from '../types';

import { App } from '@app/app';
import { NotFoundPage } from '../lazy-pages';

import { routes as generalRoutes } from './general';

export const routes: AppRoute[] = [
  {
    path: '/',
    element: <App />,
    children: generalRoutes,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
