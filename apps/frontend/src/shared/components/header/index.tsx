import { useEffect, useRef, useState } from 'react';
import useDeviceWidth from '../../hooks/use-device-width';

import { Link, NavLink } from 'react-router-dom';
import { GitHubIcon, TelegramIcon, ListIcon } from '../ui/icons';
import { ThemeSwitcher } from './theme-switcher';

import clsx from 'clsx';

type Props = { links: { name: string; path: string }[] };

/**
 * Шапка сайта
 */
export const Header = ({ links }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const ww = useDeviceWidth();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (ww <= 690) {
    return <MobileHeader links={links} />;
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
        <div className='mx-auto flex flex-1 justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12'>
          <PagesLinks links={links} />
        </div>
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

const MobileHeader = ({ links }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    if (modalRef && modalRef.current) {
      modalRef.current.showModal();
    } else return;
  };

  const closeModal = () => {
    if (modalRef && modalRef.current) {
      modalRef.current.close();
    } else return;
  };

  return (
    <>
      <header className={'bg-base-100/2 fixed right-5 top-5 z-50'}>
        <button
          className='btn-circle btn-md flex h-12 w-12 flex-col items-center justify-center border-2 border-primary/75 bg-transparent p-4 text-base-content backdrop-blur-md transition duration-500 ease-in-out'
          onClick={showModal}
        >
          <ListIcon />
        </button>

        <dialog ref={modalRef} className='modal'>
          <div className='modal-box flex flex-col gap-4'>
            <PagesLinks links={links} onClick={closeModal} />

            <div className='modal-action grid grid-cols-2 gap-4'>
              <ThemeSwitcher className='btn btn-ghost h-5 p-2' />

              <form method='dialog' className='w-full'>
                <button className='btn btn-ghost w-full'>Закрыть</button>
              </form>
            </div>
          </div>
        </dialog>
      </header>
    </>
  );
};

type PagesLinksProps = { links: { name: string; path: string }[]; onClick?: () => void };

const PagesLinks = ({ links, onClick }: PagesLinksProps) => {
  const ww = useDeviceWidth();
  const isMobile = ww <= 690;

  return links.map((r) => (
    <NavLink
      key={r.path}
      to={r.path}
      className={({ isActive, isPending }) =>
        clsx(
          'btn btn-ghost min-h-8 text-nowrap rounded font-medium text-base-content transition-colors sm:text-sm',
          isActive && 'bg-primary/50',
          isActive && !isMobile && 'shadow',
          isPending && 'animate-pulse',
          isMobile ? 'content-center p-2 text-base' : 'h-8 px-2 py-1 text-xs',
        )
      }
      onClick={onClick}
    >
      {r.name}
    </NavLink>
  ));
};

export default Header;
