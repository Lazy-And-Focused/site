import { useCopy } from '@features/copy-link';

import { SocialLinksSection, TeamMembersSection } from './sections';
import { STYLE } from './style';

const LinksPage = () => {
  return (
    <main className={STYLE.CONTAINER}>
      <SocialLinksSection />
      <TeamMembersSection />
    </main>
  );
};

export default LinksPage;
