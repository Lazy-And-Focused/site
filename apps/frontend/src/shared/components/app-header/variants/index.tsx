import type { HeaderNavigationLink } from '../types';

import { useRef } from 'react';

import {
  AppHeaderNavigation,
  AppHeaderModalNavigation,
  AppHeaderNavigationItem,
} from '../ui/navigation';

import { changeModalState, MODALS_STATES } from '../ui/navigation/modal/utils';

export const DefaultAppHeader = ({ links }: { links: HeaderNavigationLink[] }) => {
  return (
    <AppHeaderNavigation>
      <AppNavigationItems links={links} />
    </AppHeaderNavigation>
  );
};

export const MobileAppHeader = ({ links }: { links: HeaderNavigationLink[] }) => {
  const mobileModalNavigationRef = useRef<HTMLDialogElement | null>(null);

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
  links: HeaderNavigationLink[];
  onItemClick?: () => void;
}) => {
  return links.map(({ name, path }) => (
    <AppHeaderNavigationItem href={path} onClick={onItemClick} key={name}>
      {name}
    </AppHeaderNavigationItem>
  ));
};
