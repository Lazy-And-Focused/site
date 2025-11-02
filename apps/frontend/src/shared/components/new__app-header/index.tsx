import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { APP_ROUTES, ORGANIZATION_NAME } from '../../lib/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export function AppHeader(..._any: any) {
  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full border-b-2 p-4 transition duration-500 ease-in-out',
        scrollY > 0 ? 'border-primary/75 bg-base-100/20 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <nav
        className='container-lg mx-auto flex flex-row flex-wrap items-center justify-center gap-4 px-4 py-2 sm:justify-between lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center justify-start sm:flex-1'>
          <Link to={APP_ROUTES.HOME} className='-m-1.5 p-1.5'>
            <span className='sr-only'>{`Logotype of ${ORGANIZATION_NAME}'`}</span>
            <img
              width={32}
              height={32}
              alt={'Логотип'}
              src={'/images/logo.png'}
              className='h-8 w-auto rounded shadow'
            />
          </Link>
        </div>

        <div className='flex flex-row flex-wrap justify-center gap-4 text-sm font-semibold text-base-content sm:flex-1 sm:justify-end'></div>
      </nav>
    </header>
  );
}
