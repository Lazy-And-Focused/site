import { formatLinks } from '../utils';

/**
 * Ссылки социальны сетей команды.
 */
const teamSocialLinks: string[] = [
  '(personal) https://laf-team.ru/',
  '(docs) https://docs.laf-team.ru/',
  'https://patreon.com/LazyAndFocused',
  'https://t.me/laf_love',
  'https://github.com/Lazy-And-Focused',
];

const result = formatLinks(teamSocialLinks);

export default result;
