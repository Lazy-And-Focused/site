import { SocialLinksSection, TeamMembersSection } from './sections';
import { useCopyLink } from './hooks/use-copy-link';

const LinksPage = () => {
  const { copyButtonRef, copyLinkPage } = useCopyLink();

  return (
    <main className='mx-auto mt-16 h-full min-h-screen max-w-7xl'>
      <SocialLinksSection onCopyLink={copyLinkPage} copyButtonRef={copyButtonRef} />
      <TeamMembersSection />
    </main>
  );
};

export default LinksPage;
