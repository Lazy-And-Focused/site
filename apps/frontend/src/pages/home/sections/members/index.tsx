import { useFilteredMembers } from '@shared/hooks';

import { Link } from 'react-router-dom';
import { MemberCard } from '@shared/components/member-card';

import { APP_ROUTES } from '@shared/lib/constants';
import { STYLE } from './style';

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
