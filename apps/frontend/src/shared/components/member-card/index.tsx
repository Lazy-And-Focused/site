import type { Member } from '@/entities/member';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { DefaultVariant } from './variants/default';
import { FullVariant } from './variants/full';
import { Avatar } from './avatar';

import { HasPrimarySocials, HasPrimarySocialsType } from './contexts';

export { HasPrimarySocials } from './contexts';

/**
 * Компонент, возвращающий карточку участника
 * @param {Member} member Объект с информацией об участнике команды
 */
export const TeamMemberCard = ({
  member,
  type = 'default',
}: {
  member: Member;
  type?: 'default' | 'full';
}) => {
  const validateSocial = useCallback(
    (href: string) => {
      const isExec = member.socials.some((link) => link.url.startsWith(href));
      return isExec || false;
    },
    [member.socials],
  );

  const hasPrimarySocials = useMemo<HasPrimarySocialsType>(
    () => ({
      github: [validateSocial('https://github.com/'), 'https://github.com/'],
      telegram: [validateSocial('https://t.me/'), 'https://t.me/'],
    }),
    [validateSocial],
  );

  const [avatarSrc, setAvatarSrc] = useState(getAvatarUrl(member, hasPrimarySocials!['github'][0]));

  useEffect(
    () => setAvatarSrc(getAvatarUrl(member, hasPrimarySocials!['github'][0])),
    [member, hasPrimarySocials],
  );

  return (
    <HasPrimarySocials.Provider value={hasPrimarySocials}>
      {type === 'full' ? (
        <FullVariant
          member={member}
          avatar={
            <Avatar
              src={avatarSrc}
              alt={`${member.name}'s avatar`}
              className='aspect-square h-auto w-full'
            />
          }
        />
      ) : (
        <DefaultVariant
          member={member}
          avatar={
            <Avatar
              src={avatarSrc}
              alt={`${member.name}'s avatar`}
              className='aspect-square w-24'
            />
          }
        />
      )}
    </HasPrimarySocials.Provider>
  );
};

const getAvatarUrl = (member: Member, hasGitHub: boolean) => {
  if (member.avatar) {
    return member.avatar;
  } else if (hasGitHub) {
    return `https://github.com/${member.tag}.png?size=255`;
  }
  return '/images/avatars/default.png';
};

export default TeamMemberCard;
