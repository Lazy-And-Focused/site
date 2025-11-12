import type { Member } from '@entities/member';

import { MemberCardBadge } from './variants';
import { MemberSocialLink } from './ui';

import { DEFAULT_MEMBER_AVATAR_URL } from '@shared/lib/constants';

const STYLE = {
  CONTAINER:
    'relative col-span-full flex w-full max-w-md flex-col gap-2 rounded-md bg-primary/15 px-2 py-3',
  HEADER: {
    BASE: 'flex w-full flex-row justify-between gap-4',
    AVATAR: {
      CONTAINER: 'aspect-squire relative -top-12 -mb-10 h-auto w-16 overflow-hidden rounded',
      BASE: 'h-full w-full',
    },
    GENERAL_ROLE:
      'line-clamp-1 max-w-full rounded-lg border-2 border-primary/20 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary/85',
  },
  CONTENT: {
    HEADING: 'text-lg font-semibold tracking-tight text-primary-content',
    SOCIALS: {
      CONTAINER: 'grid grid-cols-6 gap-2 rounded-md bg-primary/15 p-1 text-primary',
      MORE_SOCIALS: 'col-span-1 self-center text-center',
    },
    DESCRIPTION: 'p-2 text-primary-content/85',
  },
} as const;

export type MemberCardBaseProps = {
  data: Member;
};

type MemberCardProps = MemberCardBaseProps & {
  type?: 'default' | 'badge' | 'mini';
};

export const MemberCard = ({ data: member, type = 'default' }: MemberCardProps) => {
  if (type === 'badge') {
    return <MemberCardBadge data={member} />;
  }

  const socialCount = member.socials.length;
  return (
    <div className={STYLE.CONTAINER}>
      <div className={STYLE.HEADER.BASE}>
        <div className={STYLE.HEADER.AVATAR.CONTAINER}>
          <img
            className={STYLE.HEADER.AVATAR.BASE}
            src={member.avatar || DEFAULT_MEMBER_AVATAR_URL}
            alt={`Аватар пользователя ${member.tag}`}
            loading='lazy'
          />
        </div>
        <p className={STYLE.HEADER.GENERAL_ROLE}>{member.roles[0]}</p>
      </div>

      <h3 className={STYLE.CONTENT.HEADING}>{member.name}</h3>

      {socialCount > 0 && (
        <div className={STYLE.CONTENT.SOCIALS.CONTAINER}>
          {member.socials.slice(0, socialCount <= 6 ? 6 : 5).map((social) => (
            <MemberSocialLink
              data={{
                ...social,
                customName: social.customName || `Профиль ${member.name} в ${social.platform.name}`,
              }}
            />
          ))}
          {socialCount > 6 && (
            <span className={STYLE.CONTENT.SOCIALS.MORE_SOCIALS}>
              +{member.socials.slice(6).length}
            </span>
          )}
        </div>
      )}

      {type === 'default' && <p className={STYLE.CONTENT.DESCRIPTION}>{member.description}</p>}
    </div>
  );
};
