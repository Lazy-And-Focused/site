import type { MemberCardBaseProps } from '../..';

import { MemberSocialLink } from '../../ui';

import { DEFAULT_MEMBER_AVATAR_URL } from '@shared/lib/constants';
import { STYLE } from './style';

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
