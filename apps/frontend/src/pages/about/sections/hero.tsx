import { ABOUT_PAGE_CONSTANTS } from '../lib/constants';

export const HeroPaperSection = () => {
  return (
    <section className='flex h-2/5 min-h-max w-full flex-col items-center justify-center rounded-b-xl bg-primary/25 px-6 pt-14 shadow-xl lg:px-8'>
      <div className='lg:py-46 mx-auto max-w-2xl py-16 sm:py-32'>
        <div className='text-center'>
          <h1 className='text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl'>
            {ABOUT_PAGE_CONSTANTS.HERO.TITLE}
          </h1>
          <p className='mt-8 text-pretty text-lg font-medium text-primary/75 sm:text-xl/8'>
            {ABOUT_PAGE_CONSTANTS.HERO.DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
};
