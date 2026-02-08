import { Link } from './link';
import { APP_ROUTES } from '@shared/lib/constants';

const STYLE = {
  CONTAINER: [
    'w-full border-t-2 border-primary/75',
    'bg-neutral/20 p-4 backdrop-blur-md',
    'transition duration-500 ease-in-out',
  ].join(' '),
  NAV: [
    'container mx-auto flex flex-wrap items-center justify-center',
    'px-4 py-2 text-primary sm:justify-start lg:px-8',
  ].join(' '),
} as const;

export const AppFooter = () => {
  return (
    <footer className={STYLE.CONTAINER}>
      <nav className={STYLE.NAV} aria-label='Global'>
        <Link href={APP_ROUTES.SOCIALS}>Ссылки на команду</Link>
        <Link href={APP_ROUTES.COPYRIGHT}>Авторские права</Link>
      </nav>
    </footer>
  );
};
