import { ABOUT_PAGE_CONSTANTS } from '../lib/constants';

const { HERO: SECTION } = ABOUT_PAGE_CONSTANTS;

const STYLE = {
  CONTAINER: [
    'flex h-2/5 min-h-max w-full flex-col items-center justify-center',
    'rounded-b-xl bg-primary/25 px-6 pt-14 shadow-xl lg:px-8',
  ].join(' '),
  CONTENT: {
    WRAPPER: 'lg:py-46 mx-auto max-w-2xl py-16 sm:py-32',
    INNER: 'text-center',
    TITLE: 'text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl',
    DESCRIPTION: 'mt-8 text-pretty text-lg font-medium text-primary/75 sm:text-xl/8',
  },
} as const;

export const HeroPaperSection = () => {
  return (
    <section className={STYLE.CONTAINER}>
      <div className={STYLE.CONTENT.WRAPPER}>
        <div className={STYLE.CONTENT.INNER}>
          <h1 className={STYLE.CONTENT.TITLE}>
            {SECTION.TITLE}
          </h1>
          <p className={STYLE.CONTENT.DESCRIPTION}>
            {SECTION.DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
};