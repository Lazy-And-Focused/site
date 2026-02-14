import type { Member } from '@entities/member';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TEAM_MEMBERS } from '@shared/config';

export function ScrollToStartByUrlChanges(): null {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

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
