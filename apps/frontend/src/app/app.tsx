import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppFooter } from '@shared/components/app-footer';
import { AppHeader } from '@shared/components/app-header';

import LoadingPage from '@pages/loading';

import { ScrollToStartByUrlChanges } from '@shared/lib/utils';

import { HEADER_LINKS } from '@shared/lib/constants';

const STYLE = {
  CONTAINER: 'h-full min-h-screen base-100 base-content',
} as const;

export const App = () => {
  return (
    <>
      <ScrollToStartByUrlChanges />
      <div className={STYLE.CONTAINER}>
        <AppHeader links={HEADER_LINKS} />
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
        <AppFooter />
      </div>
    </>
  );
};
