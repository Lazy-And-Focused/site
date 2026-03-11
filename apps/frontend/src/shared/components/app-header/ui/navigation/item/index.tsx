import { Link } from 'react-router-dom';
import { STYLE } from './style';

type Props = {
  href?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export const AppHeaderNavigationItem = ({ href, children, onClick }: Props) => {
  const props = {
    className: STYLE.CONTAINER,
    onClick,
  };

  if (!href) {
    return <button {...props}>{children}</button>;
  }

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};
