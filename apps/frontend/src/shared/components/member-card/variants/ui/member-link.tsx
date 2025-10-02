import type { SocialPlatform } from '@shared/types/social';
import { WebsiteIcon } from '@icons';

interface MemberLinkProps {
  url: string;
  alt: string;
  platform: SocialPlatform;
  customName?: string;
  className?: string;
}

export const MemberLink = ({ url, alt, platform, className }: MemberLinkProps) => {
  const Icon = platform.icon || WebsiteIcon;

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      aria-label={alt}
      title={alt}
      className={className || 'md:text-md dark:text-grenn-400 text-sm/6 font-semibold text-primary'}
    >
      <Icon className='h-4 w-4' />
    </a>
  );
};
