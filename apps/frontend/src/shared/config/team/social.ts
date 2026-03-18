import { parseSocialLinks } from '@shared/lib/social-links';

/**
 * Ссылки на социальные сети команды в "сыром" виде
 */
const RAW_TEAM_LINKS: string[] = [
  '(personal) [Главный сайт] https://laf-team.ru/',
  '(docs) [Документация] https://docs.laf-team.ru/',
  '(docs) [Информация о команде] https://docs.google.com/document/d/1Kb7-wxhhX3w0-_bMZ8CeAkJh10nYE8pKk07XQ_bepI8',
  'https://patreon.com/LazyAndFocused',
  'https://boosty.to/fockusty',
  'https://t.me/laf_love',
  '[Чат в Telegram] https://t.me/+BENpUvmWR2ZiNDAy',
  'https://bsky.app/profile/laf-team.ru',
  'https://github.com/Lazy-And-Focused',
];

/**
 * Обработанные ссылки команды
 */
export const TEAM_SOCIAL_LINKS = parseSocialLinks(RAW_TEAM_LINKS);
