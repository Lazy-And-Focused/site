import {
  HeroPaperSection,
  AboutMembersSection,
  CopyrightSection,
  ResourcesSection,
} from './sections';

const AboutPage = () => {
  return (
    <main className='mx-auto h-full max-w-7xl'>
      <HeroPaperSection />
      <AboutMembersSection />
      <CopyrightSection />
      <ResourcesSection />
    </main>
  );
};

export default AboutPage;
