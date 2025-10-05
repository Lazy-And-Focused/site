import { Link } from 'react-router-dom';

import { HeroImageSection, InfoSection, MemberListSection } from './sections';

const HomePage = () => {
  return (
    <main className='h-full w-full'>
      <HeroImageSection
        title={'Разработка с LAF'}
        description={
          'Мы – команда молодых, очень ленивых, но увлеченных работой энтузиастов, двигуящихся к вершинам этого мира.'
        }
        background={'/images/backgrounds/green.png'}
      >
        <Link to='/#info' className='btn btn-primary rounded-full'>
          Узнать больше
        </Link>
        <Link to='/projects' className='btn btn-ghost rounded-full text-slate-200'>
          Проекты <span aria-hidden='true'>→</span>
        </Link>
      </HeroImageSection>

      <InfoSection />
      <MemberListSection />
    </main>
  );
};

export default HomePage;
