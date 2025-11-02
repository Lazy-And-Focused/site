import { Link } from 'react-router-dom';

import { ORGANIZATION_NAME, APP_ROUTES } from '@shared/lib/constants';

export const Logotype = () => {
  const imageSrc = '/images/logo.png';
  const imageAlt = `Logotype of ${ORGANIZATION_NAME}`;

  return (
    <Link to={APP_ROUTES.HOME} className='-m-1.5 p-1.5'>
      <span className='sr-only'>{ORGANIZATION_NAME}</span>
      <img
        width={32}
        height={32}
        alt={imageAlt}
        src={imageSrc}
        className='h-8 w-auto rounded shadow'
      />
    </Link>
  );
};
