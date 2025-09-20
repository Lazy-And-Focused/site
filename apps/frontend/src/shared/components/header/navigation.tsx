import type { HeaderNavLink } from './types';

import useDeviceWidth from '@/shared/hooks/use-device-width';

import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

type Props = { links: HeaderNavLink[]; onClick?: () => void };

export const Navigation = ({ links, onClick }: Props) => {
  const ww = useDeviceWidth();
  const isMobile = ww <= 690;

  if (isMobile) {
    return links.map((r) => (
      <NavLink
        key={r.path}
        to={r.path}
        className={({ isActive, isPending }) =>
          clsx(
            'btn btn-ghost min-h-8 content-center text-nowrap rounded p-2 text-base font-medium text-base-content transition-colors sm:text-sm',
            isActive && 'bg-primary/50',
            isPending && 'animate-pulse',
          )
        }
        onClick={onClick}
      >
        {r.name}
      </NavLink>
    ));
  }

  return (
    <div className='mx-auto flex flex-1 justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12'>
      {links.map((r) => (
        <NavLink
          key={r.path}
          to={r.path}
          className={({ isActive, isPending }) =>
            clsx(
              'btn btn-ghost h-8 min-h-8 text-nowrap rounded px-2 py-1 text-xs font-medium text-base-content transition-colors sm:text-sm',
              isActive && 'bg-primary/50 shadow',
              isPending && 'animate-pulse',
            )
          }
          onClick={onClick}
        >
          {r.name}
        </NavLink>
      ))}
    </div>
  );
};
