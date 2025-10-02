import type { Member } from '@/entities/member';

import { useState } from 'react';

import { WebsiteIcon, ListIcon } from '@icons';
import { MemberLink } from './ui/member-link';

export const FullVariant = ({ member, avatar }: { member: Member; avatar: React.ReactNode }) => {
  const hasSocials = member.socials.length !== 0;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='relative w-full max-w-md rounded-md bg-primary/15 px-2 py-4 text-center'>
      {/* HEADER */}
      <p className='absolute left-0 right-0 top-0 rounded-t-md border-2 border-primary/20 border-b-primary/60 bg-primary/10 px-1 py-2 text-xs font-semibold text-primary/85'>
        {member.roles.join(', ')}
      </p>

      {/* FOOTER */}
      <p className='absolute bottom-0 left-0 right-0 h-6 rounded-b-md border-2 border-primary/20 border-t-primary/60 bg-primary/10 font-semibold text-primary/85' />

      {/* CONTENT */}
      <div className='flex w-full flex-col gap-y-4 py-6'>
        <h3 className='mt-2 flex flex-col items-center text-lg font-semibold tracking-tight text-base-content'>
          {member.name}
        </h3>

        <div className={`relative px-4 ${!hasSocials ? 'mb-12' : ''}`}>
          {avatar}

          {hasSocials && (
            <div className='absolute bottom-3 left-3 right-3 flex items-center justify-center'>
              <ul className='flex max-w-max flex-row items-center justify-center gap-2 rounded-full border-2 border-primary/25 bg-primary/55 p-2 backdrop-blur-md'>
                {member.socials.slice(0, 5).map(({ href, name, icon }) => (
                  <li key={href}>
                    <MemberLink
                      href={href}
                      alt={`Ссылка на ${name} пользователя ${member.name}`}
                      className='md:text-md text-base-100/96 text-sm/6 font-semibold'
                      icon={icon}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {hasSocials && (
          <div className='relative'>
            <button
              className='flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md bg-primary/15 px-3 py-1 text-base-content/85 hover:bg-primary/20'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <ListIcon /> Все ссылки
            </button>
            {dropdownOpen && (
              <div className='absolute bottom-0 right-0 top-auto z-10 mt-1 w-full min-w-min rounded-md border border-base-content bg-base-100 text-base-content backdrop-blur-sm'>
                {member.socials.map((s) => (
                  <a
                    href={s.href}
                    target='_blank'
                    rel='noreferrer'
                    key={s.name}
                    className='relative flex w-full min-w-max items-center justify-start gap-2 overflow-hidden text-ellipsis text-nowrap px-4 py-2 text-left first:rounded-t-md hover:bg-base-300/50'
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    {s.icon && (
                      <span className='flex aspect-square h-6 items-center justify-start overflow-clip rounded'>
                        <s.icon width={16} height={16} />
                      </span>
                    )}
                    {s.name}
                  </a>
                ))}
                <button
                  className='relative flex w-full min-w-max items-center gap-2 overflow-hidden text-ellipsis text-nowrap rounded-b-md px-4 py-2 text-left hover:bg-base-300/50'
                  onClick={() => {
                    setDropdownOpen(false);
                  }}
                >
                  <span className='block aspect-square h-6 overflow-clip rounded' />
                  Закрыть
                </button>
              </div>
            )}
          </div>
        )}

        {member.description && member.description !== '' && (
          <div className='w-full text-pretty rounded border-2 border-primary/10 bg-primary/20 p-2 text-start indent-2 text-sm font-medium text-base-content/90'>
            {member.description.split('\n').map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
