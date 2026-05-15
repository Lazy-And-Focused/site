import type { Member } from '../entity';
import { TEAM_MEMBERS } from '../config';

export function filterMembersByWithoutMeta(
  grantedMembers: Member[] = TEAM_MEMBERS,
  grantedMeta: string[] = [],
) {
  let result = [...grantedMembers];

  grantedMeta.forEach((meta) => {
    result = result.filter((member) => {
      return !member.meta?.includes(meta);
    });
  });

  return result;
}
