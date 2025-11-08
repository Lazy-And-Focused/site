import { useFilteredMembers } from '@shared/hooks';

import { Link } from 'react-router-dom';
import { TeamMemberCard } from '@/shared/components/old__member-card';
import { MemberCard } from '@shared/components/member-card';

import { APP_ROUTES } from '@shared/lib/constants';

export const MemberListSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section
      id='members'
      className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
    >
      <div className='mx-auto grid max-w-7xl gap-16 px-6 md:gap-20 lg:px-8 xl:grid-cols-3'>
        <div className='max-w-xl'>
          <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
            А «мы» это кто?
          </h2>
          <p className='mt-6 text-lg/8 text-base-content/40'>
            Юная команда из тех, кто готов покорять ваши сердца!
          </p>
          <div className='mt-8'>
            <Link to={APP_ROUTES.ABOUT} className='btn btn-outline btn-primary rounded-md'>
              Давай дальше <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>

        <ul role='list' className='grid gap-8 sm:grid-cols-2 xl:col-span-2'>
          {filteredMembers.map((member) => (
            <li key={member.tag}>
              <MemberCard data={member} type={'mini'} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
