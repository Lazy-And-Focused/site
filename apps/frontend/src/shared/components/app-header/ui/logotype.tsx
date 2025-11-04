import { Link } from 'react-router-dom';

import { APP_ROUTES, ORGANIZATION_NAME } from '@shared/lib/constants';

const logoImageSrc = '/images/logo.png';
const logoImageAlt = `Logotype of ${ORGANIZATION_NAME}`;

const STYLE = {
  CONTAINER: '-m-1.5 p-1.5',
  IMAGE: 'aspect-auto rounded shadow',
} as const;

export const AppHeaderLogotype = ({
  size = 32,
  imageSrc = logoImageSrc,
  imageAlt = logoImageAlt,
}: {
  size?: number;
  imageAlt?: string;
  imageSrc?: string;
}) => {
  return (
    <Link to={APP_ROUTES.HOME} className={STYLE.CONTAINER}>
      <span className='sr-only'>{ORGANIZATION_NAME}</span>
      <img
        title={imageAlt}
        alt={imageAlt}
        src={imageSrc}
        width={size}
        height={size}
        className={STYLE.IMAGE}
      />
    </Link>
  );
};
