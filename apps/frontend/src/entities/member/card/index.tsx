import type { Member } from '../entity';

import { useRef } from 'react';

import { MemberCardHeader, MemberCardName, MemberCardDescription, MemberCardSocials } from './ui';
import { MemberCardBadge } from './variants';

import { STYLE } from './style';

export type MemberCardBaseProps = {
  data: Member;
};

type MemberCardProps = MemberCardBaseProps & {
  type?: 'default' | 'badge' | 'mini';
};

export const MemberCard = ({ data: member, type = 'default' }: MemberCardProps) => {
  const socialsRef = useRef<HTMLDialogElement | null>(null);

  if (type === 'badge') {
    return <MemberCardBadge data={member} />;
  }

  return (
    <div className={STYLE.CONTAINER}>
      <MemberCardHeader avatar={member.avatar} tag={member.tag} generalRole={member.roles[0]} />

      <MemberCardName name={member.name} />

      <MemberCardSocials
        socials={member.socials}
        memberName={member.name}
        socialsRef={socialsRef}
      />

      {type === 'default' && member.description && (
        <MemberCardDescription description={member.description} />
      )}
    </div>
  );
};