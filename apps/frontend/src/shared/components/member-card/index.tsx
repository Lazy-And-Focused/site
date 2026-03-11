import type { Member } from '@entities/member';
import type { SocialLink } from '@/shared/types';

import { useRef } from 'react';

import { MemberCardHeader, MemberCardModal, MemberSocialLink } from './ui';
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

  const socialCount = member.socials.length;
  return (
    <div className={STYLE.CONTAINER}>
      <MemberCardHeader avatar={member.avatar} tag={member.tag} generalRole={member.roles[0]} />

      <h3 className={STYLE.CONTENT.HEADING}>{member.name}</h3>

      {socialCount > 0 && (
        <div className={STYLE.CONTENT.SOCIALS.CONTAINER}>
          <SocialLinksRow
            socials={member.socials}
            socialCount={socialCount}
            memberName={member.name}
          />
          {socialCount > 6 && (
            <MemberCardModal memberSocials={member.socials} socialsRef={socialsRef} />
          )}
        </div>
      )}

      {type === 'default' && <p className={STYLE.CONTENT.DESCRIPTION}>{member.description}</p>}
    </div>
  );
};

const SocialLinksRow = ({
  socials,
  socialCount,
  memberName,
}: {
  socials: SocialLink[];
  socialCount: number;
  memberName: string;
}) => {
  return socials.slice(0, socialCount <= 6 ? 6 : 5).map((social) => (
    <MemberSocialLink
      data={{
        ...social,
        customName: social.customName || `Профиль ${memberName} в ${social.platform.name}`,
      }}
    />
  ));
};
