import type { SocialLink } from '@/shared/types';

import { MemberSocialLink } from '../social-link';
import { MemberCardModal } from '../modal';

import { STYLE } from './style';

export type MemberCardSocialsProps = {
  socials: SocialLink[];
  memberName: string;
  socialsRef: React.MutableRefObject<HTMLDialogElement | null>;
};

export const MemberCardSocials = ({ socials, memberName, socialsRef }: MemberCardSocialsProps) => {
  const socialCount = socials.length;

  if (socialCount === 0) {
    return null;
  }

  const visibleSocials = socials.slice(0, socialCount <= 6 ? 6 : 5);

  return (
    <div className={STYLE.CONTAINER}>
      {visibleSocials.map((social) => (
        <MemberSocialLink
          key={social.id}
          data={{
            ...social,
            customName: social.customName || `Профиль ${memberName} в ${social.platform.name}`,
          }}
        />
      ))}
      {socialCount > 6 && (
        <MemberCardModal memberSocials={socials} socialsRef={socialsRef} />
      )}
    </div>
  );
};