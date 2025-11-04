const STYLE = {
  CONTAINER: 'flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12',
} as const;

export const AppHeaderNavigation = ({ children }: { children: React.ReactNode }) => {
  return <nav className={STYLE.CONTAINER}>{children}</nav>;
};

export { AppHeaderNavigationItem } from './item';
export { AppHeaderModalNavigation } from './modal';
