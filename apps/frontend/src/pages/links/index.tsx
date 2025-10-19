import { useCopy } from './hooks/use-copy-link';

import { SocialLinksSection, TeamMembersSection } from './sections';

const LinksPage = () => {
  const { ref: copyButtonRef, copyCurrentUrl } = useCopy();

  return (
    <main className='mx-auto mt-16 h-full min-h-screen max-w-7xl'>
      <SocialLinksSection onCopyLink={copyCurrentUrl} copyButtonRef={copyButtonRef} />
      <TeamMembersSection />
    </main>
  );
};

export default LinksPage;
