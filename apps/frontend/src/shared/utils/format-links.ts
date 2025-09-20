import type { SocialLink } from '@/shared/types';

import listSocialLinks from '@/shared/config/list-social-links';
import { WebsiteIcon } from '@/shared/components/ui/icons';

function extractTextInBrackets(input: string): string | null {
  const regex = /\[([^\[\]]+)\]/;
  const match = input.match(regex);
  return match ? match[1] : null;
}

/**
 * Функция, преобразующая строковые ссылки в массив SocialLink[]
 */
export const formatLinks = (links: string[]): SocialLink[] => {
  const special = ['(personal)', 'https://github.com/'];
  return links
    .map((l, i) => {
      const link = listSocialLinks.find((nl) => l.startsWith(nl.href));
      const customName = extractTextInBrackets(l);

      return {
        name: customName || link?.name || `link_${i}`,
        href: l
          .replace(/\([a-z]+\)/g, '')
          .replace(/\[([^\[\]]+)\]/g, '')
          .trim(),
        icon: link?.icon || WebsiteIcon,
        special: special.some((s) => l.startsWith(s)),
      };
    })
    .sort((a, b) => (a.special === b.special ? 0 : a.special ? -1 : 1));
};

export default { formatLinks };
