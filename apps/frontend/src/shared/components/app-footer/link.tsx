import { Link as AppLink } from 'react-router-dom';

const STYLE = {
  LINK: [
    'inline-flex items-center gap-2',
    'px-2 py-1',
    'text-nowrap text-sm/6 font-medium',
    'transition-colors',
    'hover:animate-pulse hover:text-black/80',
    'dark:hover:text-white/70',
  ].join(' '),
} as const;

export const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <AppLink to={href} className={STYLE.LINK}>
      {children}
    </AppLink>
  );
};
