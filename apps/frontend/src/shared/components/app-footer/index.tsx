import { Link } from './Link';

import { APP_ROUTES } from '@shared/lib/constants';

export const AppFooter = () => {
  return (
    <footer className='w-full border-t-2 border-primary/75 bg-neutral/20 p-4 backdrop-blur-md transition duration-500 ease-in-out'>
      <nav
        className='container mx-auto flex flex-wrap items-center justify-center px-4 py-2 text-primary sm:justify-start lg:px-8'
        aria-label='Global'
      >
        <Link href={APP_ROUTES.SOCIALS}>Ссылки на команду</Link>
        <Link href={APP_ROUTES.COPYRIGHT}>Авторские права</Link>
      </nav>
    </footer>
  );
};

