import type { HeaderProps } from '../types';

import { useState, useEffect } from 'react';

import { ThemeSwitcher } from '../theme-switcher';
import { Navigation } from '../navigation';
import {MobileHeader} from './mobile';
import { Logotype } from './ui/logotype';
import { GitHubIcon, TelegramIcon } from '@icons';

import clsx from 'clsx';

interface TeamSocial {
  visibleName: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const TEAM_SOCIALS: TeamSocial[] = [
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
] as const;


const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export const DefaultHeader = ({ links }: HeaderProps) => {
  const scrollY = useScrollY();

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

        <Navigation links={links} />

        <div className='flex flex-row flex-wrap justify-center gap-4 text-sm font-semibold text-base-content sm:flex-1 sm:justify-end'>
          {TEAM_SOCIALS.map(({ href, visibleName, icon: Icon }, index) => (
            <a
              href={href}
              className='flex items-center justify-center'
              target='_blank'
              rel='noreferrer'
            >
              <span className={index === 0 ? 'hidden md:ml-2 md:inline' : 'sr-only'}>
                {visibleName}
              </span>
              <Icon className={clsx('h-5 w-5', TEAM_SOCIALS.length !== index + 1 && 'sm:ml-2')} />
            </a>
          ))}
          <ThemeSwitcher className='h-5 w-5' />
        </div>
      </nav>
    </header>
  );
};
