import type { SocialLink } from '@/shared/types';

export type BaseMember = {
  tag: string;
  name: string;
  roles: string[];
  avatar?: string;
  description?: string;
  socials?: string[];
  meta?: string[];
};

export type Member = Omit<BaseMember, 'socials'> & {
  socials: SocialLink[];
};
