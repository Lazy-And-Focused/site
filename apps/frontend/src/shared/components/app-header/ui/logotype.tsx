import { Link } from 'react-router-dom';

import { APP_ROUTES, ORGANIZATION_NAME } from '@shared/lib/constants';

const DEFAULT_IMAGE_SOURCE = '/images/logo.png';
const DEFAULT_IMAGE_ALT_TEXT = `Logotype of ${ORGANIZATION_NAME}`;

const STYLE = {
  CONTAINER: '-m-1.5 p-1.5',
  IMAGE: 'aspect-auto rounded shadow',
} as const;

export const AppHeaderLogotype = ({
  size = 32,
  imageSrc = DEFAULT_IMAGE_SOURCE,
  imageAlt = DEFAULT_IMAGE_ALT_TEXT,
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
