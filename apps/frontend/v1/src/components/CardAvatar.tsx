import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { clsx } from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type CardAvatarProps = {
  src: string;
  alt: string;
};

/**
 * Дочерний компонент для карточки участника, проекта и тому подобных
 * @param {string} src Путь к изображению, как в теге `<img />`
 * @param {string} alt Alt-текст изображения
 *
 * @example
 * <CardAvatar src="/avatars/default.png" alt="Default avatar" />
 */
const CardAvatar = ({
  src,
  alt,
  className,
  size = 256,
  ...props
}: CardAvatarProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    size?: number;
  }) => {
  return (
    <div
      {...props}
      className={clsx(
        'flex aspect-square items-center justify-center overflow-hidden rounded',
        className,
      )}
    >
      <LazyLoadImage
        src={src}
        alt={alt}
        width={size}
        height={size}
        effect='blur'
        className='inline-block h-full w-full'
        wrapperProps={{
          style: { width: '100%', height: '100%' },
        }}
      />
    </div>
  );
};

export default CardAvatar;
