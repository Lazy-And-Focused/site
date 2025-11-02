import type { HeaderNavLink } from './types';

import { AppHeaderLogotype } from './ui/logotype';
import { AppHeaderNavigation } from './ui/navigation';

const STYLE = {
  CONTAINER: [
    'fixed inset-x-0 top-0',
    'px-4 py-3',
    'grid grid-cols-[6rem_minmax(6rem,_1fr)_6rem]',
    'justify-items-center',
  ].join(' '),
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const AppHeader = (props: { links: HeaderNavLink[] }) => {
  return (
    <header className={STYLE.CONTAINER}>
      <AppHeaderLogotype />
      <AppHeaderNavigation />
      <div>Loves</div>
    </header>
  );
};
