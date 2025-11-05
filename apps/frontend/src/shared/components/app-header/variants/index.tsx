import type { HeaderNavigationLink } from '../types';

import { useRef } from 'react';

import {
  AppHeaderNavigation,
  AppHeaderModalNavigation,
  AppHeaderNavigationItem,
} from '../ui/navigation';

import { changeModalState, MODALS_STATES } from '../ui/navigation/modal/utils';
import { AppHeaderProps } from '../';

export const DefaultAppHeader = ({ links }: AppHeaderProps) => {
  return (
    <AppHeaderNavigation>
      <AppNavigationItems links={links} />
    </AppHeaderNavigation>
  );
};

export const MobileAppHeader = ({ links }: AppHeaderProps) => {
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
