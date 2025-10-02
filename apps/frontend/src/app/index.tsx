import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { router } from '@app/providers';
import { REACT_APP_ROOT_ID } from '@app/constants';

import '@app/styles/globals.css';

/**
 * Точка входа в приложение
 */
const root = ReactDOM.createRoot(document.getElementById(REACT_APP_ROOT_ID) as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
