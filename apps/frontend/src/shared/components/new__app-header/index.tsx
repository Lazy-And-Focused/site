import { Link } from 'react-router-dom';

import { APP_ROUTES, ORGANIZATION_NAME } from '@shared/lib/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const AppHeader = (..._any: any) => {
  return (
    <header
      className={
        'fixed inset-x-0 top-0 grid grid-cols-[6rem_minmax(6rem,_1fr)_6rem] justify-items-center'
      }
    >
      <Link to={APP_ROUTES.HOME} className='-m-1.5 p-1.5'>
        <span className='sr-only'>{ORGANIZATION_NAME}</span>
        <img
          width={32}
          height={32}
          alt={"imageAlt"}
          src={"/images/logo.png"}
          className='h-8 w-auto rounded shadow'
        />
      </Link>
      <div>Ram</div>
      <div>Loves</div>
    </header>
  );
};
