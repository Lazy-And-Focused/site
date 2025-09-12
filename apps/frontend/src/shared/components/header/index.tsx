import type { HeaderProps } from './types';

import { useEffect, useState } from 'react';
import useDeviceWidth from '../../hooks/use-device-width';

import { Link } from 'react-router-dom';
import { GitHubIcon, TelegramIcon } from '../ui/icons';
import { ThemeSwitcher } from './theme-switcher';

import clsx from 'clsx';
import { Navigation } from './navigation';
import { MobileHeader } from './mobile';

/**
 * Шапка сайта
 */
export const Header = (props: HeaderProps) => {
  const [scrollY, setScrollY] = useState(0);
  const ww = useDeviceWidth();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (ww <= 690) {
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
        <div className='flex items-center justify-start gap-8 sm:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>LAF</span>
            <img
              width={32}
              height={32}
              alt='logo'
              src='/images/logo.png'
              className='h-8 w-auto rounded shadow'
            />
          </Link>
        </div>

        <Navigation links={props.links} />

        <div className='flex flex-row flex-wrap justify-center gap-4 text-sm font-semibold text-base-content sm:flex-1 sm:justify-end'>
          <a
            href='https://github.com/Lazy-And-Focused'
            className='flex items-center justify-center'
            target='_blank'
            rel='noreferrer'
          >
            <span className='hidden md:inline'>Наш GitHub</span>
            <GitHubIcon className='h-5 w-5 sm:ml-2' />
          </a>
          <a
            href='https://t.me/laf_love'
            className='flex items-center justify-center'
            target='_blank'
            rel='noreferrer'
          >
            <span className='sr-only'>Telegram канал команды</span>
            <TelegramIcon className='h-5 w-5' />
          </a>
          <ThemeSwitcher className='h-5 w-5' />
        </div>
      </nav>
    </header>
  );
};
