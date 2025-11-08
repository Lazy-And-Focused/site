import type { MemberCardBaseProps } from './';

import { MemberSocialLink } from './ui';

import { DEFAULT_MEMBER_AVATAR_URL } from '@shared/lib/constants';
import { VIEWERED_SOCIAL_NAMES } from './';

export const MemberCardMini = ({ data: member }: MemberCardBaseProps) => {
  return (
    <div className={`flex items-center gap-x-6 rounded bg-primary/15 p-2`}>
      <div className={'aspect-square h-auto w-16 overflow-hidden rounded'}>
        <img
          className={'h-full w-full transition-[opacity,_filter] duration-500'}
          src={member.avatar || DEFAULT_MEMBER_AVATAR_URL}
          alt={`Аватар пользователя ${member.tag}`}
          loading='lazy'
        />
      </div>

      <div className='mr-2 w-full text-end'>
        <h3 className='align-center flex flex-row items-center justify-end gap-x-2 text-base/7 font-semibold tracking-tight text-base-content'>
          {member.name}

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

        <p className='text-sm/6 font-semibold text-primary/75'>{member.roles.join(', ')}</p>
      </div>
    </div>
  );
};
