import type { Member } from '@/entities/member';

import { useContext } from 'react';
import { HasPrimarySocials } from '../contexts';
import { MemberLink } from './ui/member-link';

export const DefaultVariant = ({ member, avatar }: { member: Member; avatar: React.ReactNode }) => {
  const hasPrimarySocials = useContext(HasPrimarySocials);

  return (
    <div className={`flex items-center gap-x-6 rounded bg-primary/15 p-2`}>
      {avatar}

      <div className='mr-2 w-full text-end'>
        <h3 className='align-center flex flex-row items-center justify-end gap-x-2 text-base/7 font-semibold tracking-tight text-base-content'>
          {member.name}

          {hasPrimarySocials &&
            member.socials
              .filter((social) =>
                Object.values(hasPrimarySocials).some((primarySocial) =>
                  social.href.startsWith(primarySocial[1]),
                ),
              )
              .map((link) => (
                <MemberLink
                  href={link.href}
                  alt={`Ссылка на ${link.name} пользователя ${member.name}`}
                  icon={link.icon}
                />
              ))}
        </h3>
        <p className='text-sm/6 font-semibold text-primary/75'>{member.roles.join(', ')}</p>
      </div>
    </div>
  );
};
