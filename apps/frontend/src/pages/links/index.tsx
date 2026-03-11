import { useCopy } from './hooks/use-copy-link';

import { SocialLinksSection, TeamMembersSection } from './sections';
import { STYLE } from './style';

const LinksPage = () => {
  const { ref: copyButtonRef, copyCurrentUrl } = useCopy();

  return (
    <main className={STYLE.CONTAINER}>
      <SocialLinksSection onCopyLink={copyCurrentUrl} copyButtonRef={copyButtonRef} />
      <TeamMembersSection />
    </main>
  );
};

export default LinksPage;
