import type { Member } from '@entities/member';
import type { SocialLink } from '@shared/types';

import { WebsiteIcon } from '@icons';

const VIEWERED_SOCIAL_NAMES = ['github', 'telegram'] as const;

export const MemberCard = ({
  data: member,
  type = 'default',
}: {
  data: Member;
  type?: 'default' | 'mini';
}) => {
  if (type === 'mini') {
    return (
      <div className={`flex items-center gap-x-6 rounded bg-primary/15 p-2`}>
        <div className={'aspect-square h-auto w-16 overflow-hidden rounded'}>
          <img
            className={'h-full w-full transition-[opacity,_filter] duration-500'}
            // Костыль
            src={member.avatar || `https://github.com/${member.tag}.png?size=255`}
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
  }

  return member.name;
};

const MemberSocialLink = ({ data: { id, url, customName, platform } }: { data: SocialLink }) => {
  const Icon = platform.icon || WebsiteIcon;

  return (
    <a
      key={id}
      href={url}
      target='_blank'
      rel='noreferrer'
      aria-label={customName}
      title={customName}
      className={'md:text-md dark:text-grenn-400 text-sm/6 font-semibold text-primary'}
    >
      <Icon aria-label={customName} className='h-4 w-4' />
    </a>
  );
};
