import { TeamMemberCard } from '@shared/components/member-card';

import { TEAM_MEMBERS } from '@shared/config/team/members';
import { LINKS_PAGE_CONSTANTS } from '../lib/constants';

const useFilteredMembers = () => {
  return TEAM_MEMBERS.filter((member) => !member.meta?.includes('leave'));
};

export const TeamMembersSection = () => {
  const filteredMembers = useFilteredMembers();
  const { TEAM_MEMBERS: TEAM_CONSTANTS } = LINKS_PAGE_CONSTANTS.SECTIONS;

  return (
    <section className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-16 px-6 md:gap-14 lg:px-8 xl:grid-cols-3'>
        <div className='max-w-xl'>
          <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
            {TEAM_CONSTANTS.TITLE}
          </h2>
          <p className='mt-6 text-lg/8 text-base-content/40'>{TEAM_CONSTANTS.DESCRIPTION}</p>
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
