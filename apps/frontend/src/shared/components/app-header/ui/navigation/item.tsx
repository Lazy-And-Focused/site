import { Link } from 'react-router-dom';

const STYLE = {
  CONTAINER: [
    'btn btn-ghost',
    'min-h-8 text-nowrap rounded-3xl',
    'font-medium sm:text-sm',
    'text-base-content transition-colors',
  ].join(' '),
} as const;

type Props = {
  href?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export const AppHeaderNavigationItem = ({ href, children, onClick }: Props) => {
  if (!href) {
    return (
      <button className={STYLE.CONTAINER} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link to={href} className={STYLE.CONTAINER} onClick={onClick}>
      {children}
    </Link>
  );
};
