import type { Member } from '@entities/member';

import { useRef } from 'react';

import { MemberCardBadge } from './variants';
import { MemberSocialLink, CardMemberModal } from './ui';

import { MODALS_STATES, changeModalState } from './ui/modal/utils';

import { DEFAULT_MEMBER_AVATAR_URL } from '@shared/lib/constants';

const STYLE = {
  CONTAINER: [
    'relative col-span-full',
    'flex flex-col gap-2',
    'w-full max-w-md px-2 py-3',
    'rounded-md bg-primary/15',
  ].join(' '),
  HEADER: {
    BASE: 'flex w-full flex-row justify-between gap-4',
    AVATAR: {
      BASE: [
        'relative -top-12 -mb-10',
        'aspect-squire h-auto w-16',
        'overflow-hidden rounded',
      ].join(' '),
      IMAGE: 'h-full w-full',
    },
    GENERAL_ROLE: [
      'line-clamp-1 max-w-full px-2 py-1',
      'rounded-lg border-2',
      'border-primary/20 bg-primary/10',
      'text-xs font-semibold text-primary/85',
    ].join(' '),
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
  const socialsRef = useRef<HTMLDialogElement | null>(null);

  if (type === 'badge') {
    return <MemberCardBadge data={member} />;
  }

  const socialCount = member.socials.length;
  return (
    <div className={STYLE.CONTAINER}>
      <div className={STYLE.HEADER.BASE}>
        <div className={STYLE.HEADER.AVATAR.BASE}>
          <img
            className={STYLE.HEADER.AVATAR.IMAGE}
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
            <CardMemberModal
              placeholderItem={
                <button
                  className={STYLE.CONTENT.SOCIALS.MORE_SOCIALS}
                  onClick={() => changeModalState(socialsRef, MODALS_STATES.SHOW)}
                >
                  +{member.socials.slice(6).length}
                </button>
              }
              ref={socialsRef}
            >
              {member.socials.map((social) => (
                <li
                  className='list-none items-center gap-2 transition-colors hover:text-primary hover:underline'
                  key={social.id}
                >
                  <a
                    href={social.url}
                    target='_blank'
                    rel='noreferrer'
                    className='relative flex w-full min-w-max items-center justify-start gap-2 overflow-hidden text-ellipsis text-nowrap rounded-md px-4 py-2 text-left hover:bg-base-300/50'
                  >
                    {social.platform.icon && (
                      <span className='flex aspect-square h-6 items-center justify-start overflow-clip rounded'>
                        <social.platform.icon className='h-4 w-4' />
                      </span>
                    )}
                    {social.customName || social.platform.name}
                  </a>
                </li>
              ))}
            </CardMemberModal>
          )}
        </div>
      )}

      {type === 'default' && <p className={STYLE.CONTENT.DESCRIPTION}>{member.description}</p>}
    </div>
  );
};
