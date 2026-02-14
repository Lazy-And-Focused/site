import { useFilteredMembers } from '@shared/hooks';

import { MemberCard } from '@shared/components/member-card';

export const AboutMembersSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section
      id='members'
      className='flex min-h-full w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
    >
      <ul
        role='list'
        className='mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-x-8 gap-y-12 rounded-lg bg-base-content/5 p-4 md:grid-cols-2 lg:grid-cols-3'
      >
        {filteredMembers.map((member) => (
          <li key={member.tag} className='flex h-max items-stretch'>
            <MemberCard data={member} />
          </li>
        ))}
      </ul>
    </section>
  );
};
