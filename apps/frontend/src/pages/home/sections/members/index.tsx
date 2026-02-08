import { useFilteredMembers } from '@shared/hooks';

import { Link } from 'react-router-dom';
import { MemberCard } from '@shared/components/member-card';

import { APP_ROUTES } from '@shared/lib/constants';

const STYLE = {
  CONTAINER: [
    'flex min-h-screen w-full flex-col items-center justify-center',
    'px-6 py-14 lg:px-8',
  ].join(' '),
  CONTENT: {
    WRAPPER: 'mx-auto grid max-w-7xl gap-16 px-6 md:gap-20 lg:px-8 xl:grid-cols-3',
    TITLE: 'text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl',
    DESCRIPTION: 'mt-6 text-lg/8 text-base-content/40',
    ACTIONS: 'mt-8',
    LIST: 'grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:col-span-2',
  },
} as const;

export const MemberListSection = () => {
  const filteredMembers = useFilteredMembers();

  return (
    <section id='members' className={STYLE.CONTAINER}>
      <div className={STYLE.CONTENT.WRAPPER}>
        <div className='max-w-xl'>
          <h2 className={STYLE.CONTENT.TITLE}>А «мы» это кто?</h2>
          <p className={STYLE.CONTENT.DESCRIPTION}>
            Юная команда из тех, кто готов покорять ваши сердца!
          </p>
          <div className={STYLE.CONTENT.ACTIONS}>
            <Link to={APP_ROUTES.ABOUT} className='btn btn-outline btn-primary rounded-md'>
              Давай дальше <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>

        <ul role='list' className={STYLE.CONTENT.LIST}>
          {filteredMembers.map((member) => (
            <li key={member.tag}>
              <MemberCard data={member} type={'badge'} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
