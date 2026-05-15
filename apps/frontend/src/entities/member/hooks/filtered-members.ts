import type { Member } from '../entity';

import { TEAM_MEMBERS } from '../config';

import { filterMembersByWithoutMeta } from '../lib/utils';

/**
 * Возвращает только участников, у кого **нет** подходящих мета.
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
  const meta = grantedMeta.slice();
  if (meta.length === 0) {
    meta.push('leave');
  }
  return filterMembersByWithoutMeta(grantedMembers, meta);
};
export default useFilteredMembers;
