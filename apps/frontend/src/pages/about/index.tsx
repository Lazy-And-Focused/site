import {
  HeroPaperSection,
  AboutMembersSection,
  CopyrightSection,
  ResourcesSection,
} from './sections';

const STYLE = {
  CONTAINER: 'mx-auto h-full max-w-7xl',
} as const;

const AboutPage = () => {
  return (
    <main className={STYLE.CONTAINER}>
      <HeroPaperSection />
      <AboutMembersSection />
      <CopyrightSection />
      <ResourcesSection />
    </main>
  );
};

export default AboutPage;
