import { Link } from 'react-router-dom';
import { HeroSection, InfoSection, MemberListSection } from './sections';

import { HOME_PAGE_CONSTANTS } from './lib/constants';
import { APP_ROUTES } from '@shared/lib/constants';
import { STYLE } from './style';

const { HERO: SECTION } = HOME_PAGE_CONSTANTS;

const HomePage = () => {
  return (
    <main className={STYLE.CONTAINER}>
      <HeroSection
        title={SECTION.TITLE}
        description={SECTION.DESCRIPTION}
        background={SECTION.BACKGROUND}
      >
        <Link to='/#info' className={STYLE.PRIMARY_LINK}>
          Узнать больше
        </Link>
        <Link to={APP_ROUTES.PROJECTS} className={STYLE.SECONDARY_LINK}>
          Проекты <span aria-hidden='true'>→</span>
        </Link>
      </HeroSection>

      <InfoSection />
      <MemberListSection />
    </main>
  );
};

export default HomePage;
