import type { Member } from '@/entities/member';
import { useContext } from 'react';
import { HasPrimarySocials } from '../contexts';
import { WebsiteIcon } from '@/icons';

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
              .filter((link) =>
                Object.values(hasPrimarySocials).some((s) => link.href.startsWith(s[1])),
              )
              .map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`Ссылка на ${s.name} пользователя ${member.name}`}
                  className='md:text-md dark:text-grenn-400 text-sm/6 font-semibold text-primary'
                >
                  {s.icon ? (
                    <s.icon width={16} height={16} />
                  ) : (
                    <WebsiteIcon width={16} height={16} />
                  )}
                </a>
              ))}
        </h3>
        <p className='text-sm/6 font-semibold text-primary/75'>{member.roles.join(', ')}</p>
      </div>
    </div>
  );
};
