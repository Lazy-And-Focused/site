import { CreditsSection } from '../../ui/credits-section';

import { PROJECT_REPOSITORY } from '@/shared/lib/constants';
import { ABOUT_PAGE_CONSTANTS } from '../../lib/constants';

import { STYLE } from './style';

const { CREDITS } = ABOUT_PAGE_CONSTANTS.SECTIONS;

/**
 * Секция с благодарностями за ресурсы (иконки, как пример)
 */
export const ResourcesSection = () => {
  return (
    <CreditsSection id={'credits'} title={CREDITS.TITLE} description={CREDITS.DESCRIPTION}>
      <ul role='list' className={STYLE.LIST.CONTAINER}>
        <li className={STYLE.LIST.ITEM}>
          <a
            href='https://icons.getbootstrap.com/'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLE.LIST.LINK}
          >
            Boostrap Icons
          </a>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <a
            href='https://www.svgrepo.com/'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLE.LIST.LINK}
          >
            SVG Repo
          </a>
          <span className={STYLE.LIST.SUPPLEMENT}> (иконки Gravatar и VK)</span>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <a
            href={PROJECT_REPOSITORY}
            target='_blank'
            rel='noopener noreferrer'
            className={STYLE.LIST.LINK}
          >
            И если интересно, весь стек здесь
          </a>
          <span className={STYLE.LIST.SUPPLEMENT}> &lt;- кликните на текст</span>
        </li>
      </ul>
    </CreditsSection>
  );
};
