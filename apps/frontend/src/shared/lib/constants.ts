import type { HeaderNavigationLink } from '@shared/components/app-header/types';
import type { SocialLink } from '../types';

import { parseSocialLinks } from './social-links';

export const PROJECT_REPOSITORY = 'https://github.com/Lazy-And-Focused/site';

export const ORGANIZATION_NAME = 'Lazy And Focused';
export const ORGANIZATION_SHORT_NAME = 'LAF';
export const ORGANIZATION_REPOSITORIES_URL = 'https://api.github.com/orgs/Lazy-And-Focused/repos';

export const REACT_APP_ROOT_ID = 'root';

export const DEFAULT_MEMBER_AVATAR_URL = '/images/avatars/default.webp';

export const APP_ROUTES = {
  HOME: '/',
  PROJECTS: 'projects',
  ABOUT: 'about',
  SOCIALS: 'links',
  COPYRIGHT: '/about/#credits',
} as const;

export const HEADER_LINKS: HeaderNavigationLink[] = [
  { name: 'Главная', path: APP_ROUTES.HOME },
  { name: 'Проекты', path: APP_ROUTES.PROJECTS },
  { name: 'О нас', path: APP_ROUTES.ABOUT },
];
// Обязательно указывайте customName в '[customName] url'
export const HEADER_SOCIAL_LINKS: SocialLink[] = parseSocialLinks([
  '[Наш GitHub] https://github.com/Lazy-And-Focused',
  '[Telegram канал команды] https://t.me/laf_love',
]);
