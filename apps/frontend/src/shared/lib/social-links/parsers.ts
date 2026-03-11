import type { SocialLink } from '@shared/types/social';
import type { ParseOptions } from './types';

import { extractTextFromBrackets, clearBrackets } from './formatters';

import { SOCIAL_PLATFORMS } from '@shared/config/app/social';

export function parseSocialLinks(links: string[], options: ParseOptions = {}): SocialLink[] {
  const {
    generateId = (_, idx) => `social-link-${idx}`,
    specialAttributes = ['(personal)', '(docs)'],
  } = options;

  return links
    .map((link, index) => {
      const cleanUrl = clearBrackets(link);
      const customName = extractTextFromBrackets(link);

      const platform =
        SOCIAL_PLATFORMS.find(
          (p) =>
            p.prefixes?.some((prefix) => link.includes(prefix)) ||
            p.domains?.some((domain) => link.includes(domain)),
        ) || SOCIAL_PLATFORMS[0];

      const isSpecial = specialAttributes.some((attr) => link.includes(attr));

      const socialLink: SocialLink = {
        id: generateId(link, index),
        url: cleanUrl,
        platform,
        customName,
        isSpecial,
      };

      return socialLink;
    })
    .sort((a, b) => (a.isSpecial === b.isSpecial ? 0 : a.isSpecial ? -1 : 1));
}
