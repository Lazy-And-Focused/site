import { formatLinks } from '../utils';

/**
 * Ссылки социальны сетей команды.
 */
const teamSocialLinks: string[] = [
  '(personal) https://laf-team.ru/',
  '(docs) https://docs.laf-team.ru/',
  '(docs) https://docs.google.com/document/d/1Kb7-wxhhX3w0-_bMZ8CeAkJh10nYE8pKk07XQ_bepI8',
  'https://patreon.com/LazyAndFocused',
  'https://boosty.to/fockusty',
  'https://t.me/laf_love',
  'https://t.me/+BENpUvmWR2ZiNDAy',
  'https://bsky.app/profile/laf-team.ru',
  'https://github.com/Lazy-And-Focused',
];

const result = formatLinks(teamSocialLinks);

export default result;
