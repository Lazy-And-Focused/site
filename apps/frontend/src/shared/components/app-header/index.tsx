import type { HeaderProps } from './types';

import { useEffect, useState } from 'react';
import { useDeviceWidth } from '@/shared/hooks';

import { Link } from 'react-router-dom';
import { ThemeSwitcher } from './theme-switcher';
import { Navigation } from './navigation';
import { MobileHeader } from './mobile';

import { GitHubIcon, TelegramIcon } from '@icons';

import clsx from 'clsx';

import { APP_ROUTES, ORGANIZATION_NAME } from '../../lib/constants';

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

interface TeamSocial {
  visibleName: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const teamSocials: TeamSocial[] = [
  {
    visibleName: 'Наш GitHub',
    href: 'https://github.com/Lazy-And-Focused',
    icon: GitHubIcon,
  },
  {
    visibleName: 'Telegram канал команды',
    href: 'https://t.me/laf_love',
    icon: TelegramIcon,
  },
];

export const AppHeader = (props: HeaderProps) => {
  const deviceWidth = useDeviceWidth();
  const scrollY = useScrollY();

  if (deviceWidth <= 690) {
    return <MobileHeader {...props} />;
  }

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full border-b-2 p-4 transition duration-500 ease-in-out',
        scrollY > 0 ? 'border-primary/75 bg-base-100/20 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <nav
        className='container-lg mx-auto flex flex-row flex-wrap items-center justify-center gap-4 px-4 py-2 sm:justify-between lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center justify-start sm:flex-1'>
          <Logotype />
        </div>

        <Navigation links={props.links} />

        <div className='flex flex-row flex-wrap justify-center gap-4 text-sm font-semibold text-base-content sm:flex-1 sm:justify-end'>
          {teamSocials.map(({ href, visibleName, icon: Icon }, index) => (
            <a
              href={href}
              className='flex items-center justify-center'
              target='_blank'
              rel='noreferrer'
            >
              <span className={index === 0 ? 'hidden md:ml-2 md:inline' : 'sr-only'}>
                {visibleName}
              </span>
              <Icon className={clsx('h-5 w-5', teamSocials.length !== index + 1 && 'sm:ml-2')} />
            </a>
          ))}
          <ThemeSwitcher className='h-5 w-5' />
        </div>
      </nav>
    </header>
  );
};

const Logotype = () => {
  const imageSrc = '/images/logo.png';
  const imageAlt = `Logotype of ${ORGANIZATION_NAME}'`;

  return (
    <Link to={APP_ROUTES.HOME} className='-m-1.5 p-1.5'>
      <span className='sr-only'>{ORGANIZATION_NAME}</span>
      <img
        width={32}
        height={32}
        alt={imageAlt}
        src={imageSrc}
        className='h-8 w-auto rounded shadow'
      />
    </Link>
  );
};
