import { TeamMemberCard } from '@shared/components/member-card';
import { TEAM_MEMBERS } from '@shared/config/team/members';

const useFilteredMembers = () => {
  return TEAM_MEMBERS.filter((member) => !member.meta?.includes('leave'));
};

export const AboutMembersSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section
      id='members'
      className='flex min-h-full w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
    >
      <ul
        role='list'
        className='mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-8 rounded-lg bg-base-content/5 p-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
      >
        {filteredMembers.map((member) => (
          <li key={member.tag} className='flex h-max items-stretch'>
            <TeamMemberCard member={member} type='full' />
          </li>
        ))}
      </ul>
    </section>
  );
};
