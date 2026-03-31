import { ABOUT_PAGE_CONSTANTS } from '../../lib/constants';
import { STYLE } from './style';

const { HERO: SECTION } = ABOUT_PAGE_CONSTANTS;

export const HeroPaperSection = () => {
  return (
    <section className={STYLE.CONTAINER}>
      <div className={STYLE.CONTENT.WRAPPER}>
        <div className={STYLE.CONTENT.INNER}>
          <h1 className={STYLE.CONTENT.TITLE}>{SECTION.TITLE}</h1>
          <p className={STYLE.CONTENT.DESCRIPTION}>{SECTION.DESCRIPTION}</p>
        </div>
      </div>
    </section>
  );
};
