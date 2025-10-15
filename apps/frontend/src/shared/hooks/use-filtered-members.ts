import type { Member } from '../../entities/member';

import { TEAM_MEMBERS } from '../config';

/**
 * Возвращает только участников, у кого нет пододящих мета.
 *
 * @param meta Список мета для фильтрации (вернёт участников без этих мета)
 * @param members Массив участников, но по умолчанию используется TEAM_MEMBERS константа
 */
export const useFilteredMembers = (
  members: Member[] = TEAM_MEMBERS,
  meta: string[] = ['leave'],
) => {
  meta.forEach((meta) => (members = members.filter((member) => !member.meta?.includes(meta))));

  return members;
};
