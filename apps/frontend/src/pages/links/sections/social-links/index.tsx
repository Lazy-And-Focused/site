import { TEAM_SOCIAL_LINKS } from '@shared/config/team/social-links';
import { LINKS_PAGE_CONSTANTS } from '../../lib/constants';
import { STYLE } from './style';

const { SOCIAL_LINKS: SECTION } = LINKS_PAGE_CONSTANTS.SECTIONS;

interface SocialLinksSectionProps {
  onCopyLink: () => void;
  copyButtonRef: React.RefObject<HTMLButtonElement>;
}

export const SocialLinksSection = ({ onCopyLink, copyButtonRef }: SocialLinksSectionProps) => {
  return (
    <section className={STYLE.CONTAINER}>
      <h2 className={STYLE.CONTENT.TITLE}>{SECTION.TITLE}</h2>
      <p className={STYLE.CONTENT.TITLE}>{SECTION.DESCRIPTION}</p>

      <ul className={STYLE.LIST.BASE}>
        {TEAM_SOCIAL_LINKS.map((link) => (
          <li className={STYLE.LIST.ITEM} key={link.id}>
            <a href={link.url} target='_blank' rel='noreferrer' className={STYLE.LIST.ITEM_LINK}>
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

      <button className={STYLE.BUTTON} onClick={onCopyLink} ref={copyButtonRef}>
        Скопировать адрес страницы
      </button>

      <p className={STYLE.HINT}>{SECTION.HINT}</p>
    </section>
  );
};
