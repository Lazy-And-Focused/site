import type { ReactNode } from 'react';

import { ORGANIZATION_SHORT_NAME } from '@shared/lib/constants';

interface Props {
  children: ReactNode;
}

export const ProjectsHero = ({ children }: Props) => {
  return (
    <section
      className={[
        'flex min-h-screen w-full shadow-xl',
        'flex-col items-center justify-center',
        'px-6 pt-14 lg:px-8',
        'bg-cover bg-center bg-no-repeat',
        "bg-[#418d76] bg-[url('/images/backgrounds/green.png')]",
        'dark:bg-[#205848] dark:bg-none',
      ].join(' ')}
    >
      <div className='mx-auto max-w-2xl py-16 pt-16 sm:pt-12'>
        <div className='text-center'>
          <h1 className='mb-8 text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
            Сделано с {ORGANIZATION_SHORT_NAME}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
};
