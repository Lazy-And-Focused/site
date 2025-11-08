import type { Member } from '@entities/member';

import { MemberCardMini } from './variants/mini';

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

  return <div></div>;
};

