import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { clsx } from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
  ...props
}: CardAvatarProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={clsx(
        'flex aspect-square h-16 w-16 overflow-hidden rounded items-center justify-center',
        className,
      )}>
      <LazyLoadImage
        src={src}
        alt={alt}
        width={256}
        height={256}
        placeholderSrc='/avatars/default.webp'
        className="h-full w-full"
      />
    </div>
  );
};

export default CardAvatar;
