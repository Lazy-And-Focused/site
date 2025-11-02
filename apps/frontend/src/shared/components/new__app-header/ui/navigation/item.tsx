import { Link } from 'react-router-dom';

export const AppHeaderNavigationItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <Link to={href}>{children}</Link>;
};
