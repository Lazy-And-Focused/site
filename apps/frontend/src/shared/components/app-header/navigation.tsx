import type { HeaderNavLink } from './types';

import { useDeviceWidth } from '@/shared/hooks';

import { NavLink as Link } from 'react-router-dom';

import clsx from 'clsx';

type Props = { links: HeaderNavLink[]; onClick?: () => void };

export const Navigation = ({ links, onClick }: Props) => {
  const deviceWidth = useDeviceWidth();
  const isMobile = deviceWidth <= 690;

  if (isMobile) {
    return links.map(({ path, name }) => (
      <NavigationLink
        key={path}
        to={path}
        className={'content-center text-base font-medium'}
        onClick={onClick}
      >
        {name}
      </NavigationLink>
    ));
  }

  return (
    <div className='mx-auto flex flex-1 justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12'>
      {links.map(({ path, name }) => (
        <NavigationLink key={path} to={path} className={'h-8 px-2 py-1 text-xs'} onClick={onClick}>
          {name}
        </NavigationLink>
      ))}
    </div>
  );
};

const NavigationLink = ({
  to,
  onClick,
  className,
  children,
}: {
  to: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className={({ isActive: actived, isPending: pended }) =>
        clsx(
          'btn btn-ghost min-h-8 text-nowrap rounded p-2 font-medium text-base-content transition-colors sm:text-sm',
          className,
          actived && 'bg-primary/50 shadow',
          pended && 'animate-pulse',
        )
      }
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
