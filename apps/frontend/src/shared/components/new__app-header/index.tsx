import { Link } from 'react-router-dom';

import { APP_ROUTES, ORGANIZATION_NAME } from '@shared/lib/constants';

const STYLE = {
  CONTAINER: [
    'fixed inset-x-0 top-0',
    'px-4 py-3',
    'grid grid-cols-[6rem_minmax(6rem,_1fr)_6rem]',
    'justify-items-center',
  ].join(' '),
  LOGOTYPE: {
    CONTAINER: '-m-1.5 p-1.5',
    IMAGE: 'aspect-auto rounded shadow',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const AppHeader = (..._any: any) => {
  return (
    <header className={STYLE.CONTAINER}>
      <AppHeaderLogotype />
      <div>Ram</div>
      <div>Loves</div>
    </header>
  );
};


const logoImageSrc = '/images/logo.png';
const logoImageAlt = `Logotype of ${ORGANIZATION_NAME}`;

const AppHeaderLogotype = ({
  size = 32,
  imageSrc = logoImageSrc,
  imageAlt = logoImageAlt,
}: {
  size?: number;
  imageAlt?: string;
  imageSrc?: string;
}) => {
  return (
    <Link to={APP_ROUTES.HOME} className={STYLE.LOGOTYPE.CONTAINER}>
      <span className='sr-only'>{ORGANIZATION_NAME}</span>
      <img
        title={imageAlt}
        alt={imageAlt}
        src={imageSrc}
        width={size}
        height={size}
        className={STYLE.LOGOTYPE.IMAGE}
      />
    </Link>
  );
};
