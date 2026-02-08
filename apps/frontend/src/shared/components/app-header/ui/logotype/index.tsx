import { Link } from 'react-router-dom';

import { APP_ROUTES } from '@shared/lib/constants';
import { DEFAULT_IMAGE_SOURCE, DEFAULT_IMAGE_ALT_TEXT, ORGANIZATION_NAME } from './constants';
import { STYLE } from './style';

type Props = {
  size?: number;
  imageAlt?: string;
  imageSrc?: string;
};

export const AppHeaderLogotype = ({
  size = 32,
  imageSrc = DEFAULT_IMAGE_SOURCE,
  imageAlt = DEFAULT_IMAGE_ALT_TEXT,
}: Props) => {
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
