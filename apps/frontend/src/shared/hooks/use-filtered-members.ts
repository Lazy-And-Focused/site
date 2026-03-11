import type { Member } from '../../entities/member';

import { TEAM_MEMBERS } from '../config';

import { filterMembersByWithoutMeta } from '@shared/lib/utils';

/**
 * Возвращает только участников, у кого **нет** подхящих мета.
 *
 * !!! Используется обратный синтаксис к filterMembersByMeta()
 */
export const useFilteredMembers = (
  /** Список мета для фильтрации (вернёт участников без этих мета)
   *  (равен `['leave']` по умолчанию)
   */
  grantedMeta: string[] = [],
  /** Массив участников, но по умолчанию используется TEAM_MEMBERS
   *  константа
   */
  grantedMembers: Member[] = TEAM_MEMBERS,
) => {
  const meta = [...grantedMeta];
  if (meta.length === 0) {
    meta.push('leave');
  }
  const members = [...grantedMembers];

  return filterMembersByWithoutMeta(members, meta);
};
export default useFilteredMembers;
