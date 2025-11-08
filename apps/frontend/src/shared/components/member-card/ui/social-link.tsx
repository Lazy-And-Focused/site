import type { SocialLink } from '@shared/types';

import { WebsiteIcon } from '@icons';

const STYLE = {
  LINK: ['font-semibold text-sm/6 text-primary', 'md:text-md dark:text-grenn-400'].join(' '),
};

export const MemberSocialLink = ({
  data: { id, url, customName, platform },
}: {
  data: SocialLink;
}) => {
  const Icon = platform.icon || WebsiteIcon;

  return (
    <a
      key={id}
      href={url}
      target='_blank'
      rel='noreferrer'
      aria-label={customName}
      title={customName}
      className={STYLE.LINK}
    >
      <Icon aria-label={customName} className='h-4 w-4' />
    </a>
  );
};
