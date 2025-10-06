import { TEAM_SOCIAL_LINKS } from '@shared/config/team/social-links';
import { LINKS_PAGE_CONSTANTS } from '../lib/constants';

interface SocialLinksSectionProps {
  onCopyLink: () => void;
  copyButtonRef: React.RefObject<HTMLButtonElement>;
}

export const SocialLinksSection = ({ onCopyLink, copyButtonRef }: SocialLinksSectionProps) => {
  const { SOCIAL_LINKS } = LINKS_PAGE_CONSTANTS.SECTIONS;

  return (
    <section className='flex w-full flex-col items-center justify-center px-8 py-16 lg:px-12'>
      <h2 className='text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
        {SOCIAL_LINKS.TITLE}
      </h2>
      <p className='my-8 text-center text-lg text-base-content/40'>{SOCIAL_LINKS.DESCRIPTION}</p>

      <ul className='mx-auto grid w-full max-w-2xl list-inside list-disc grid-cols-1 justify-start gap-3 rounded-lg bg-base-content/5 p-6 text-sm font-medium text-base-content/85 sm:grid-cols-2'>
        {TEAM_SOCIAL_LINKS.map((link) => (
          <li
            className='list-none items-center gap-2 transition-colors hover:text-primary hover:underline'
            key={link.id}
          >
            <a
              href={link.url}
              target='_blank'
              rel='noreferrer'
              className='relative flex w-full min-w-max items-center justify-start gap-2 overflow-hidden text-ellipsis text-nowrap rounded-md px-4 py-2 text-left hover:bg-base-300/50'
            >
              {link.platform.icon && (
                <span className='flex aspect-square h-6 items-center justify-start overflow-clip rounded'>
                  <link.platform.icon className='h-4 w-4' />
                </span>
              )}
              {link.customName || link.platform.name}
            </a>
          </li>
        ))}
      </ul>

      <button
        className='btn btn-ghost mt-10 w-full rounded-full text-slate-800 dark:text-slate-200 md:max-w-80'
        onClick={onCopyLink}
        ref={copyButtonRef}
      >
        Скопировать адрес страницы
      </button>

      <p className='mt-12 text-base text-base-content/40'>{SOCIAL_LINKS.HINT}</p>
    </section>
  );
};
