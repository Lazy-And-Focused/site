import { CreditsSection } from '../../ui/credits-section';

import { ABOUT_PAGE_CONSTANTS } from '../../lib/constants';
import { STYLE } from './style';

const { COPYRIGHT } = ABOUT_PAGE_CONSTANTS.SECTIONS;

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
