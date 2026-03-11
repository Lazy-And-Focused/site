import { FooterLink } from './ui/link';
import { APP_ROUTES } from '@shared/lib/constants';
import { STYLE } from './style';

export const AppFooter = () => {
  return (
    <footer className={STYLE.CONTAINER}>
      <nav className={STYLE.NAV} aria-label='Global'>
        <FooterLink href={APP_ROUTES.SOCIALS}>Ссылки на команду</FooterLink>
        <FooterLink href={APP_ROUTES.COPYRIGHT}>Авторские права</FooterLink>
      </nav>
    </footer>
  );
};
