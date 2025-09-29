import type { SocialLink } from '@/shared/types';

// Есть идея добавить поля "skills". Также в бэкенде
// есть свои типы,поэтому следует потом привести всё
// к одному стандарту. Короче, открыть issue надо
// будет и стереть этот комментарий.

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
