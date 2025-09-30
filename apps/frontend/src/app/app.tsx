import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import { AppHeader } from '@/shared/components/app-header';
import { AppFooter } from '@/shared/components/app-footer';

import Loading from '@/pages/loading';

import { HEADER_LINKS } from './constants';

export const App = () => {
  return (
    <>
      <ScrollToStartByUrlChanges />
      <div className='base-100 base-content h-full min-h-screen'>
        <AppHeader links={HEADER_LINKS} />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <AppFooter />
      </div>
    </>
  );
};

const ScrollToStartByUrlChanges = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};
