import { Link } from 'react-router-dom';

const STYLE = {
  CONTAINER: [
    'btn btn-ghost',
    'min-h-8 text-nowrap rounded-3xl',
    'font-medium sm:text-sm',
    'text-base-content transition-colors',
  ].join(' '),
};

export const AppHeaderNavigationItem = ({
  href,
  children
}: {
  href?: string;
  children: React.ReactNode;
  }) => {
  if (!href) {
    return (
      <button className={STYLE.CONTAINER}>
        {children}
      </button>
    )
  }

  return (
    <Link to={href} className={STYLE.CONTAINER}>
      {children}
    </Link>
  );
};
