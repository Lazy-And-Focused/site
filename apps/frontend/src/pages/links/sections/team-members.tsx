import { TeamMemberCard } from '@/shared/components/old__member-card';

import { useFilteredMembers } from '@shared/hooks';

import { LINKS_PAGE_CONSTANTS } from '../lib/constants';

const { TEAM_MEMBERS: SECTION } = LINKS_PAGE_CONSTANTS.SECTIONS;

export const TeamMembersSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-16 px-6 md:gap-14 lg:px-8 xl:grid-cols-3'>
        <div className='max-w-xl'>
          <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
            {SECTION.TITLE}
          </h2>
          <p className='mt-6 text-lg/8 text-base-content/40'>{SECTION.DESCRIPTION}</p>
        </div>
        <ul
          role='list'
          className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 xl:col-span-2'
        >
          {filteredMembers.map((member) => (
            <li key={member.tag}>
              <div>
                <TeamMemberCard member={member} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
