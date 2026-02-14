import { DEFAULT_MEMBER_AVATAR_URL } from '@/shared/lib/constants';

const STYLE = {
  BASE: 'flex w-full flex-row justify-between gap-4',
  AVATAR: {
    BASE: 'relative -top-12 -mb-10 aspect-squire h-auto w-16 overflow-hidden rounded',
    IMAGE: 'h-full w-full',
  },
  GENERAL_ROLE: [
    'line-clamp-1 max-w-full px-2 py-1',
    'rounded-lg border-2',
    'border-primary/20 bg-primary/10',
    'text-xs font-semibold text-primary/85',
  ].join(' '),
} as const;

export const MemberCardHeader = ({
  avatar,
  tag,
  generalRole,
}: {
  avatar?: string;
  tag: string;
  generalRole: string;
}) => {
  return (
    <div className={STYLE.BASE}>
      <div className={STYLE.AVATAR.BASE}>
        <img
          className={STYLE.AVATAR.IMAGE}
          src={avatar || DEFAULT_MEMBER_AVATAR_URL}
          alt={`Аватар пользователя ${tag}`}
          loading='lazy'
        />
      </div>
      <p className={STYLE.GENERAL_ROLE}>{generalRole}</p>
    </div>
  );
};
