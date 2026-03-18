import { useCopy } from '@/features/copy-link';
import { TEAM_SOCIAL_LINKS } from '@shared/config/team/social-links';
import { LINKS_PAGE_CONSTANTS } from '../../lib/constants';
import { STYLE } from './style';

const { SOCIAL_LINKS: SECTION } = LINKS_PAGE_CONSTANTS.SECTIONS;

export const SocialLinksSection = () => {
  const { ref: copyButtonRef, copyCurrentUrl } = useCopy(SECTION.COPY_BUTTON_PLACEHOLDER);

  return (
    <section className={STYLE.CONTAINER}>
      <h2 className={STYLE.CONTENT.TITLE}>{SECTION.TITLE}</h2>
      <p className={STYLE.CONTENT.DESCRIPTION}>{SECTION.DESCRIPTION}</p>

      <ul className={STYLE.LIST.BASE}>
        {TEAM_SOCIAL_LINKS.map((link) => (
          <li className={STYLE.LIST.ITEM} key={link.id}>
            <a href={link.url} target='_blank' rel='noreferrer' className={STYLE.LIST.ITEM_LINK}>
              {link.platform.icon && (
                <span className={STYLE.LIST.ITEM_LINK_ICON.WRAPPER}>
                  <link.platform.icon className={STYLE.LIST.ITEM_LINK_ICON.ICON} />
                </span>
              )}
              {link.customName || link.platform.name}
            </a>
          </li>
        ))}
      </ul>

      <button className={STYLE.BUTTON} onClick={() => copyCurrentUrl()} ref={copyButtonRef}>
        {SECTION.COPY_BUTTON_PLACEHOLDER}
      </button>

      <p className={STYLE.HINT}>{SECTION.HINT}</p>
    </section>
  );
};
