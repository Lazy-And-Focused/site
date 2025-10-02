import { WebsiteIcon } from '@icons';

export const MemberLink = ({
  href,
  alt,
  icon: Icon,
  className,
}: {
  href: string;
  alt: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}) => {
  return (
    <a
      key={href}
      href={href}
      target='_blank'
      rel='noreferrer'
      aria-label={alt}
      title={alt}
      className={className || 'md:text-md dark:text-grenn-400 text-sm/6 font-semibold text-primary'}
    >
      {Icon ? <Icon width={16} height={16} /> : <WebsiteIcon width={16} height={16} />}
    </a>
  );
};
