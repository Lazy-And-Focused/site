import type { SocialLink } from '@/shared/types';

import { socialLinks } from '@/shared/config/lists/social-links';
import { WebsiteIcon } from '@/shared/components/ui/icons';

const textInBrackets = /\[([^[\]]+)\]/g;

/**
 * Вытаскивает значение из `[]` в строке.
 *
 * @param input Строка для извлечения
 * @returns {string | null} string?
 */
function extractTextInBrackets(input: string): string | null {
  const match = input.match(textInBrackets);
  return match ? match[1] : null;
}

/**
 * Избавляется от `()` и `[]` в строке.
 *
 * @param input Строка для очистки
 * @returns {string} string
 */
function getClearedLink(input: string): string {
  return input
    .replace(/\([a-z]+\)/g, '')
    .replace(textInBrackets, '')
    .trim();
}

/**
 * Функция, преобразующая строковую ссылку (URL) подтип SocialLink.
 */
export function format(link: string): SocialLink & { special: boolean } {
  const special = ['(personal)', 'https://github.com/'];

  const association = socialLinks.find((social) => link.startsWith(social.href));
  const customName = extractTextInBrackets(link);

  return {
    name: customName || association?.name || new URL(link).hostname,
    href: getClearedLink(link),
    icon: association?.icon || WebsiteIcon,
    special: special.some((social) => link.startsWith(social)),
  };
}

/**
 * Функция, преобразующая строковые ссылки в массив SocialLink[].
 */
export const formatMany = (links: string[]): SocialLink[] => {
  return links
    .map((link) => format(link))
    .sort((a, b) => (a.special === b.special ? 0 : a.special ? -1 : 1));
};
