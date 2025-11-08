import type { Member } from '@entities/member';

import { MemberCardBadge } from './variants';
import { MemberSocialLink } from './ui';

import { DEFAULT_MEMBER_AVATAR_URL } from '@shared/lib/constants';

export type MemberCardBaseProps = {
  data: Member;
};

export const MemberCard = ({
  data: member,
  type = 'default',
}: MemberCardBaseProps & {
  type?: 'default' | 'badge' | 'mini';
}) => {
  if (type === 'badge') {
    return <MemberCardBadge data={member} />;
  }

  const socialCount = member.socials.length;
  if (type === 'mini') {
    return (
      <div
        className={
          'relative col-span-full flex w-full max-w-md flex-col gap-2 rounded-md bg-primary/15 px-2 py-3'
        }
      >
        <div className={'flex w-full flex-row justify-between gap-4'}>
          <div className='aspect-squire relative -top-12 -mb-10 h-auto w-16 overflow-hidden rounded'>
            <img
              className={'h-full w-full'}
              src={member.avatar || DEFAULT_MEMBER_AVATAR_URL}
              alt={`Аватар пользователя ${member.tag}`}
              loading='lazy'
            />
          </div>
          <p className='line-clamp-1 max-w-full rounded-lg border-2 border-primary/20 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary/85'>
            {member.roles[0]}
          </p>
        </div>

        <h3 className={'text-lg font-semibold tracking-tight text-base-content'}>{member.name}</h3>

        {socialCount > 0 && (
          <div className='grid grid-cols-6 gap-2 rounded-md bg-primary/15 p-1 text-primary'>
            {member.socials.slice(0, socialCount <= 6 ? 6 : 5).map((social) => (
              <MemberSocialLink
                data={{
                  ...social,
                  customName:
                    social.customName || `Профиль ${member.name} в ${social.platform.name}`,
                }}
              />
            ))}
            {socialCount > 6 && (
              <span className='col-span-1 self-center text-center'>
                +{member.socials.slice(6).length}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return member.name;
};
