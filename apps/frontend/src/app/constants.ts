import type { HeaderNavLink } from '@shared/components/app-header/types';

export const REACT_APP_ROOT_ID = 'root';

export const HEADER_LINKS: HeaderNavLink[] = [
  { name: 'Главная', path: '/' },
  { name: 'Проекты', path: 'projects' },
  { name: 'О нас', path: 'about' },
];

// В будущем можно добавить:
// export const API_BASE_URL = import.meta.env.VITE_API_URL;
