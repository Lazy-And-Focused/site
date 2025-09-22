import { Link } from 'react-router-dom';

/**
 * Подвал сайта
 */
export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-primary/75 bg-neutral/20 p-4 backdrop-blur-md transition duration-500 ease-in-out'>
      <nav
        className='container mx-auto flex flex-wrap items-center justify-center px-4 py-2 text-primary sm:justify-start lg:px-8'
        aria-label='Global'
      >
        <Link
          to='/links'
          className='inline-flex items-center gap-2 text-nowrap px-2 py-1 text-sm/6 font-medium transition-colors hover:animate-pulse hover:text-black/80 dark:hover:text-white/70'
        >
          Ссылки на команду
        </Link>
        <Link
          to='/about/#credits'
          className='inline-flex items-center gap-2 text-nowrap px-2 py-1 text-sm/6 font-medium transition-colors hover:animate-pulse hover:text-black/80 dark:hover:text-white/70'
        >
          Авторские права
        </Link>
      </nav>
    </footer>
  );
};
