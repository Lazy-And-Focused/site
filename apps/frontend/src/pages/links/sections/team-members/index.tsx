import { MemberCard } from '@shared/components/member-card';
import { useFilteredMembers } from '@shared/hooks';

import { LINKS_PAGE_CONSTANTS } from '../../lib/constants';
import { STYLE } from './style';

const { TEAM_MEMBERS: SECTION } = LINKS_PAGE_CONSTANTS.SECTIONS;

export const TeamMembersSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section className={STYLE.SECTION}>
      <div className={STYLE.CONTAINER}>
        <div className={STYLE.HEADER}>
          <h2 className={STYLE.TITLE}>{SECTION.TITLE}</h2>
          <p className={STYLE.DESCRIPTION}>{SECTION.DESCRIPTION}</p>
        </div>
        <ul role='list' className={STYLE.LIST}>
          {filteredMembers.map((member) => (
            <li key={member.tag} className={STYLE.LIST_ITEM}>
              <MemberCard data={member} type={'mini'} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};