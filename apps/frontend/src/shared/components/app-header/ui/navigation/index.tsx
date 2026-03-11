import { STYLE } from './style';

interface Props {
  children: React.ReactNode;
}

export const AppHeaderNavigation = ({ children }: Props) => {
  return <nav className={STYLE.CONTAINER}>{children}</nav>;
};

export { AppHeaderNavigationItem } from './item';
export { AppHeaderModalNavigation } from './modal';
