import type { DetailedHTMLProps, HTMLAttributes } from 'react';
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
  DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return (
    <div className='aspect-square h-auto w-16 overflow-hidden rounded'>
      <LazyLoadImage
        src={src}
        width={96}
        height={96}
        className='h-full w-full'
        effect='blur'
        wrapperProps={{
          style: { transitionDelay: '1s' },
        }}
        placeholderSrc='/avatars/default.webp'
        {...props}
      />
    </div>
  );
};

export default CardAvatar;
