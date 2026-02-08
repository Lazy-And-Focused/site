import { Link } from 'react-router-dom';
import { STYLE } from './style';

export const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link to={href} className={STYLE.LINK}>
      {children}
    </Link>
  );
};
