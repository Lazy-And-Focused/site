import type { HeaderNavLink } from './types';

import { AppHeaderLogotype } from './ui/logotype';
import {
  AppHeaderNavigation,
  AppHeaderNavigationItem,
  AppHeaderModalNavigation,
} from './ui/navigation';
import { AppHeaderSocialLinks } from './ui/social-links';

import { WebsiteIcon } from '@icons';

import { useShiftPosition } from './hooks/use-shift-position';
import { useDeviceWidth } from '@shared/hooks';
import { useRef } from 'react';

import { MODALS_STATES, changeModalState } from './ui/navigation/modal/utils';

import { HEADER_SOCIAL_LINKS } from '@shared/lib/constants';

import clsx from 'clsx';

const STYLE = {
  CONTAINER: {
    BASE: [
      'fixed z-50 inset-x-0 top-0',
      'px-4 py-3',
      'grid grid-cols-[6rem_minmax(6rem,_1fr)_6rem]',
      'justify-items-center',
      'border-b-2',
      'transition duration-500 ease-in-out',
    ].join(' '),
    SHIFTED: {
      YES: 'border-primary/75 bg-base-100/20 backdrop-blur-md',
      NO: 'border-transparent',
    },
  },
} as const;

const socialLinks = HEADER_SOCIAL_LINKS.map((link) => ({
  id: link.id,
  href: link.url,
  name: link.customName || link.platform.name,
  icon: link.platform.icon || WebsiteIcon,
}));

export const AppHeader = ({ links }: { links: HeaderNavLink[] }) => {
  const shifted = useShiftPosition();
  const deviceWidth = useDeviceWidth();

  return (
    <header
      className={clsx(
        STYLE.CONTAINER.BASE,
        shifted ? STYLE.CONTAINER.SHIFTED.YES : STYLE.CONTAINER.SHIFTED.NO,
      )}
    >
      <AppHeaderLogotype />
      {!(deviceWidth <= 670) ? <PcAppHeader links={links} /> : <MobileAppHeader links={links} />}
      <AppHeaderSocialLinks linkSize={20} links={socialLinks} />
    </header>
  );
};

const PcAppHeader = ({ links }: { links: HeaderNavLink[] }) => {
  return (
    <AppHeaderNavigation>
      <AppNavigationItems links={links} />
    </AppHeaderNavigation>
  );
};

const MobileAppHeader = ({ links }: { links: HeaderNavLink[] }) => {
  const mobileModalNavigationRef = useRef<HTMLDialogElement>(null);

  return (
    <AppHeaderModalNavigation
      placeholderItem={
        <AppHeaderNavigationItem
          onClick={() => changeModalState(mobileModalNavigationRef, MODALS_STATES.SHOW)}
        >
          Открыть меню
        </AppHeaderNavigationItem>
      }
      ref={mobileModalNavigationRef}
    >
      <AppNavigationItems links={links} />
    </AppHeaderModalNavigation>
  );
};

const AppNavigationItems = ({ links }: { links: HeaderNavLink[] }) => {
  return links.map(({ name, path }) => (
    <AppHeaderNavigationItem href={path}>{name}</AppHeaderNavigationItem>
  ));
};
