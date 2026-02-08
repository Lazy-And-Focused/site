import { CreditsSection } from '../ui/credits-section';

import { PROJECT_REPOSITORY } from '@shared/lib/constants';
import { ABOUT_PAGE_CONSTANTS } from '../lib/constants';

const { COPYRIGHT, CREDITS } = ABOUT_PAGE_CONSTANTS.SECTIONS;

const STYLE = {
  LIST: {
    CONTAINER: [
      'mx-auto w-full max-w-2xl list-inside list-disc',
      'space-y-4 rounded-lg bg-base-content/5 p-6',
      'text-sm font-medium text-base-content/85',
    ].join(' '),
    ITEM: 'list-disc',
    DISABLED: 'cursor-not-allowed transition-colors hover:text-primary',
    SUPPLEMENT: 'text-base-content/50',
    LINK: [
      'inline-flex items-center gap-2',
      'transition-colors hover:text-primary hover:underline',
    ].join(' '),
  },
} as const;

export const CopyrightSection = () => {
  return (
    <CreditsSection id={'copyright'} title={COPYRIGHT.TITLE} description={COPYRIGHT.DESCRIPTION}>
      <ul role='list' className={STYLE.LIST.CONTAINER}>
        <li className={STYLE.LIST.ITEM}>
          <span className={STYLE.LIST.DISABLED}>
            Аватары пользователей, как и их описания, <strong>принадлежат их владельцам</strong>
          </span>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <span className={STYLE.LIST.SUPPLEMENT}>Дополнение: </span>
          <span className={STYLE.LIST.DISABLED}>
            принадлежат <strong>кроме тех случаев, когда</strong> авторское право соотносится с
            другим правообладателем
          </span>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <span className={STYLE.LIST.DISABLED}>
            Любая информация об участника была предоставлена,{' '}
            <strong>
              основываясь на данных из Интернет-ресурсов, если пользователь не предоставил
            </strong>{' '}
            описание, аватар или ссылки
          </span>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <span className={STYLE.LIST.SUPPLEMENT}>Дополнение: </span>
          <span className={STYLE.LIST.DISABLED}>
            ссылки на социальные сети участников были предоставлены{' '}
            <strong>только по обоюдному согласию между сторонами</strong>
          </span>
        </li>
      </ul>
    </CreditsSection>
  );
};

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
            className='transition-colors hover:text-primary hover:underline'
          >
            SVG Repo
          </a>
          <span className='text-base-content/50'> (иконки Gravatar и VK)</span>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <a
            href={PROJECT_REPOSITORY}
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-primary hover:underline'
          >
            И если интересно, весь стек здесь
          </a>
          <span className='text-base-content/50'> &lt;- кликните на текст</span>
        </li>
      </ul>
    </CreditsSection>
  );
};