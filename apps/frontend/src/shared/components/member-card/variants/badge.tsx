import type { MemberCardBaseProps } from '../';

import { MemberSocialLink } from '../ui';

import { DEFAULT_MEMBER_AVATAR_URL } from '@shared/lib/constants';

const STYLE = {
  CONTAINER: 'flex items-center gap-x-6 rounded bg-primary/15 p-2',
  AVATAR: {
    BASE: 'aspect-square h-auto w-20 overflow-hidden rounded',
    IMAGE: 'h-full w-full',
  },
  CONTENT: {
    CONTAINER: 'mr-2 w-full text-end',
    HEADING: [
      'flex flex-row items-center justify-end gap-x-1',
      'text-base/7 font-semibold tracking-tight text-base-content',
    ].join(' '),
    GENERAL_ROLE: 'line-clamp-1 max-w-full text-sm/6 font-semibold text-primary/75',
  },
} as const;

const SHOWED_SOCIALS = ['github', 'telegram'] as const;

export const MemberCardBadge = ({ data: member }: MemberCardBaseProps) => {
  return (
    <div className={STYLE.CONTAINER}>
      <div className={STYLE.AVATAR.BASE}>
        <img
          className={STYLE.AVATAR.IMAGE}
          src={member.avatar || DEFAULT_MEMBER_AVATAR_URL}
          alt={`Аватар пользователя ${member.tag}`}
          loading='lazy'
        />
      </div>

      <div className={STYLE.CONTENT.CONTAINER}>
        <h3 className={STYLE.CONTENT.HEADING}>
          <span className='mr-1'>{member.name}</span>

          {member.socials
            .filter((social) =>
              SHOWED_SOCIALS.some((socialName) =>
                social.platform.name.toLowerCase().includes(socialName),
              ),
            )
            .map((social) => (
              <MemberSocialLink
                data={{
                  ...social,
                  customName:
                    social.customName || `Профиль ${member.name} в ${social.platform.name}`,
                }}
              />
            ))}
        </h3>

        <p className={STYLE.CONTENT.GENERAL_ROLE}>{member.roles[0]}</p>
      </div>
    </div>
  );
};
