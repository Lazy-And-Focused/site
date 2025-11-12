import { MemberCard } from '@shared/components/member-card';

import { useFilteredMembers } from '@shared/hooks';

import { LINKS_PAGE_CONSTANTS } from '../lib/constants';

const { TEAM_MEMBERS: SECTION } = LINKS_PAGE_CONSTANTS.SECTIONS;

export const TeamMembersSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-16 px-6 md:gap-14 lg:px-8'>
        <div className='max-w-xl'>
          <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
            {SECTION.TITLE}
          </h2>
          <p className='mt-6 text-lg/8 text-base-content/40'>{SECTION.DESCRIPTION}</p>
        </div>
        <ul
          role='list'
          className='grid w-full max-w-7xl grid-cols-1 justify-items-center gap-x-4 gap-y-12 p-4 md:grid-cols-2 xl:grid-cols-3'
        >
          {filteredMembers.map((member) => (
            <li key={member.tag} className='flex h-max w-full min-w-[20em] items-stretch'>
              <MemberCard data={member} type={'mini'} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
