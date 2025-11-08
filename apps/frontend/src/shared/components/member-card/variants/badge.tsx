import type { MemberCardBaseProps } from '../';

import { MemberSocialLink } from '../ui';

import { DEFAULT_MEMBER_AVATAR_URL } from '@shared/lib/constants';
import { VIEWERED_SOCIAL_NAMES } from '../constants';

export const MemberCardBadge = ({ data: member }: MemberCardBaseProps) => {
  return (
    <div className={`flex items-center gap-x-6 rounded bg-primary/15 p-2`}>
      <div className={'aspect-square h-auto w-20 overflow-hidden rounded'}>
        <img
          className={'h-full w-full'}
          src={member.avatar || DEFAULT_MEMBER_AVATAR_URL}
          alt={`Аватар пользователя ${member.tag}`}
          loading='lazy'
        />
      </div>

      <div className='mr-2 w-full text-end'>
        <h3 className='align-center flex flex-row items-center justify-end gap-x-1 text-base/7 font-semibold tracking-tight text-base-content'>
          <span className='mr-1'>{member.name}</span>

          {member.socials
            .filter((social) =>
              VIEWERED_SOCIAL_NAMES.some((socialName) =>
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

        <p className='line-clamp-1 max-w-full text-sm/6 font-semibold text-primary/75'>
          {member.roles[0]}
        </p>
      </div>
    </div>
  );
};
