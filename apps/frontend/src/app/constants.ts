import type { HeaderNavLink } from '@/shared/components/app-header/types';

export const REACT_APP_ROOT_ID = 'root';

export const HEADER_LINKS: HeaderNavLink[] = [
  { name: 'Главная', path: '/' },
  { name: 'Проекты', path: 'projects' },
  { name: 'О нас', path: 'about' },
];
