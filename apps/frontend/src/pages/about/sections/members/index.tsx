import { useFilteredMembers } from '@shared/hooks';

import { MemberCard } from '@shared/components/member-card';
import { STYLE } from './style';

export const AboutMembersSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section id='members' className={STYLE.CONTAINER}>
      <ul role='list' className={STYLE.LIST}>
        {filteredMembers.map((member) => (
          <li key={member.tag} className={STYLE.LIST_ITEM}>
            <MemberCard data={member} />
          </li>
        ))}
      </ul>
    </section>
  );
};
