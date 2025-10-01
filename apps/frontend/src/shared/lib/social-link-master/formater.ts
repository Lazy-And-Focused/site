import type { SocialLink } from '@/shared/types';

import { socialLinks } from '@/shared/config/lists/social-links';
import { WebsiteIcon } from '@/shared/components/ui/icons';

const textInSquareBrackets = /\[([^[\]]+)\]/;

/**
 * Вытаскивает значение из `[]` в строке.
 *
 * @param input Строка для извлечения
 * @returns {string | null} string?
 */
function extractTextInBrackets(input: string): string | null {
  const match = input.match(textInSquareBrackets);
  return match ? match[1] : null;
}

/**
 * Избавляется от `()` и `[]` в строке.
 *
 * @param input Строка для очистки
 * @returns {string} string
 */
function clearByBrackets(input: string): string {
  return input
    .replace(/\([A-Za-zА-Яа-яЁё_ ]+\)/g, '')
    .replace(/\[[A-Za-zА-Яа-яЁё_ ]+\]/g, '')
    .trim();
}

const specialAttributes = ['(personal)', 'https://github.com/'];

/**
 * Функция, преобразующая строковую ссылку (~URL) под тип SocialLink.
 * 
 * @example
 * "(personal) [Главный сайт] https://laf-team.ru/" => {
 *   name: "Главный сайт",
 *   href: "https://laf-team.ru/",
 *   icon: WebsiteIcon,
 *   special: true                 // почему смотри в реализации
 * };
 * Где special — является ли ссылкой "особенной" для показа... Используется при навигации
 */
export function stringToSocialLink(link: string): SocialLink & { special: boolean } {
  const cleared = clearByBrackets(link);

  const association = socialLinks.find((social) => cleared.startsWith(social.href));
  const customName = extractTextInBrackets(link);

  return {
    name: customName || association?.name || new URL(cleared).hostname,
    href: clearByBrackets(link),
    icon: association?.icon || WebsiteIcon,
    special: specialAttributes.some((social) => link.startsWith(social)),
  };
}

/**
 * Функция, преобразующая строковые ссылки в массив SocialLink[].
 */
export const stringsToSocialLinks = (links: string[]): SocialLink[] => {
  return links
    .map((link) => stringToSocialLink(link))
    .sort((a, b) => (a.special === b.special ? 0 : a.special ? -1 : 1));
};
