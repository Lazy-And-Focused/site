import { stringsToSocialLinks as formatLinks } from '@/shared/lib/link-master';

/**
 * Ссылки на социальные сети команды в чистом/сыром виде.
 */
const rawLinks: string[] = [
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
 * Массив ссылок команды в обработанном виде.
 */
export const teamSocialLinks = formatLinks(rawLinks);
