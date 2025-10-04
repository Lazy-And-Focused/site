import type { AppRoute } from '../types';

import { App } from '@app/app';
import { NotFoundPage } from './lazy';

import { mainRoutes } from './main';

export const appRoutes: AppRoute[] = [
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
