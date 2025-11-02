import type { HeaderNavLink } from './types';

import { AppHeaderLogotype } from './ui/logotype';
import { AppHeaderNavigation, AppHeaderNavigationItem } from './ui/navigation';
import { WebsiteIcon } from '@icons';

import { HEADER_SOCIAL_LINKS } from '@shared/lib/constants';
import { AppHeaderSocialLinks } from './ui/social-links';

const STYLE = {
  CONTAINER: [
    'fixed z-50 inset-x-0 top-0',
    'px-4 py-3',
    'grid grid-cols-[6rem_minmax(6rem,_1fr)_6rem]',
    'justify-items-center',
  ].join(' '),
} as const;

const socialLinks = HEADER_SOCIAL_LINKS.map((link) => ({
  id: link.id,
  href: link.url,
  name: link.customName || link.platform.name,
  icon: link.platform.icon || WebsiteIcon,
}));

export const AppHeader = ({ links }: { links: HeaderNavLink[] }) => {
  return (
    <header className={STYLE.CONTAINER}>
      <AppHeaderLogotype />
      <AppHeaderNavigation>
        {links.map(({ name, path }) => (
          <AppHeaderNavigationItem href={path}>{name}</AppHeaderNavigationItem>
        ))}
      </AppHeaderNavigation>
      <AppHeaderSocialLinks links={socialLinks} />
    </header>
  );
};
