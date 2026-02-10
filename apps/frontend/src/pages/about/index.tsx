import {
  HeroPaperSection,
  AboutMembersSection,
  CopyrightSection,
  ResourcesSection,
} from './sections';
import { STYLE } from './style';

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
