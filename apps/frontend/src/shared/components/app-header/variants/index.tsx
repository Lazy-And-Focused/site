import type { HeaderNavLink } from '../types';

import { useRef } from 'react';

import {
  AppHeaderNavigation,
  AppHeaderModalNavigation,
  AppHeaderNavigationItem,
} from '../ui/navigation';

import { changeModalState, MODALS_STATES } from '../ui/navigation/modal/utils';

export const PcAppHeader = ({ links }: { links: HeaderNavLink[] }) => {
  return (
    <AppHeaderNavigation>
      <AppNavigationItems links={links} />
    </AppHeaderNavigation>
  );
};

export const MobileAppHeader = ({ links }: { links: HeaderNavLink[] }) => {
  const mobileModalNavigationRef = useRef<HTMLDialogElement>(null);

  const handleCloseModal = () => {
    changeModalState(mobileModalNavigationRef, MODALS_STATES.HIDE);
  };

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
      <AppNavigationItems links={links} onItemClick={handleCloseModal} />
    </AppHeaderModalNavigation>
  );
};

const AppNavigationItems = ({
  links,
  onItemClick,
}: {
  links: HeaderNavLink[];
  onItemClick?: () => void;
}) => {
  return links.map(({ name, path }) => (
    <AppHeaderNavigationItem href={path} onClick={onItemClick} key={name}>
      {name}
    </AppHeaderNavigationItem>
  ));
};
