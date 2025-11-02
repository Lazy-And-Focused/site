import type { SVGProps } from 'react';
import type { HeaderNavLink } from './types';

import { AppHeaderLogotype } from './ui/logotype';
import { AppHeaderNavigation, AppHeaderNavigationItem } from './ui/navigation';
import { WebsiteIcon } from '@icons';

import { HEADER_SOCIAL_LINKS } from '@shared/lib/constants';

const STYLE = {
  CONTAINER: [
    'fixed z-50 inset-x-0 top-0',
    'px-4 py-3',
    'grid grid-cols-[6rem_minmax(6rem,_1fr)_6rem]',
    'justify-items-center',
  ].join(' '),
} as const;

export const AppHeader = ({ links }: { links: HeaderNavLink[] }) => {
  return (
    <header className={STYLE.CONTAINER}>
      <AppHeaderLogotype />
      <AppHeaderNavigation>
        {links.map(({ name, path }) => (
          <AppHeaderNavigationItem href={path}>{name}</AppHeaderNavigationItem>
        ))}
      </AppHeaderNavigation>
      <AppHeaderSocialLinks
        links={HEADER_SOCIAL_LINKS.map((link) => ({
          id: link.id,
          href: link.url,
          name: link.customName || link.platform.name,
          icon: link.platform.icon || WebsiteIcon,
        }))}
      />
    </header>
  );
};

type SocialLink = {
  id: string;
  href: string;
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

const AppHeaderSocialLinks = ({
  links,
  linkSize = 18,
}: {
  links: SocialLink[];
  linkSize: number;
}) => {
  return (
    <div className='flex flex-row items-center justify-end gap-3'>
      {links.map(({ id, href, name, icon: Icon }) => (
        <a key={id} title={name} href={href} target='_blank' rel='noreferrer'>
          <span className={'sr-only'}>{name}</span>
          {<Icon width={linkSize} height={linkSize} />}
        </a>
      ))}
    </div>
  );
};
