import { Link } from 'react-router-dom';
import { HeroSection, InfoSection, MemberListSection } from './sections';

import { HOME_PAGE_CONSTANTS } from './lib/constants';
import { APP_ROUTES } from '@shared/lib/constants';

const { HERO: SECTION } = HOME_PAGE_CONSTANTS;

const HomePage = () => {
  return (
    <main className='h-full w-full'>
      <HeroSection
        title={SECTION.TITLE}
        description={SECTION.DESCRIPTION}
        background={SECTION.BACKGROUND}
      >
        <Link to='/#info' className='btn btn-primary rounded-full'>
          Узнать больше
        </Link>
        <Link to={APP_ROUTES.PROJECTS} className='btn btn-ghost rounded-full text-slate-200'>
          Проекты <span aria-hidden='true'>→</span>
        </Link>
      </HeroSection>

      <InfoSection />
      <MemberListSection />
    </main>
  );
};

export default HomePage;
