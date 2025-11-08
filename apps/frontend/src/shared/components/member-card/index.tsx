import type { Member } from '@entities/member';

import { MemberCardMini } from './MemberCardMini';

export const VIEWERED_SOCIAL_NAMES = ['github', 'telegram'] as const;

export type MemberCardBaseProps = {
  data: Member;
};

export const MemberCard = ({
  data: member,
  type = 'default',
}: MemberCardBaseProps & {
  type?: 'default' | 'mini';
}) => {
  if (type === 'mini') {
    return <MemberCardMini data={member} />;
  }

  return member.name;
};

