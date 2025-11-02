import type { HeaderNavLink } from './types';

import { AppHeaderLogotype } from './ui/logotype';
import { AppHeaderNavigation, AppHeaderNavigationItem } from './ui/navigation';

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
      <div>Loves</div>
    </header>
  );
};
