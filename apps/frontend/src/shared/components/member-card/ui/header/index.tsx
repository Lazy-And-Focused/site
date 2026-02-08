import { DEFAULT_MEMBER_AVATAR_URL } from '@/shared/lib/constants';
import { STYLE } from './style';

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
