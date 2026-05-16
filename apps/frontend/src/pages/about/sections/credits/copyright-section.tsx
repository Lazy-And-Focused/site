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
            принадлежат владельцам, <strong>кроме тех случаев, когда</strong> авторское право
            относится к другому правообладателю
          </span>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <span className={STYLE.LIST.DISABLED}>
            Любая информация об участниках была предоставлена на основе данных из интернет-ресурсов,
            если сам пользователь не предоставил описание, аватар или ссылки
          </span>
        </li>
        <li className={STYLE.LIST.ITEM}>
          <span className={STYLE.LIST.SUPPLEMENT}>Дополнение: </span>
          <span className={STYLE.LIST.DISABLED}>
            ссылки на социальные сети участников были предоставлены{' '}
            <strong>только по обоюдному согласию</strong>
          </span>
        </li>
      </ul>
    </CreditsSection>
  );
};
