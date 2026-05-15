import type { ReactNode } from 'react';

import { ORGANIZATION_SHORT_NAME } from '@shared/lib/constants';
import { STYLE } from './style';

interface Props {
  children: ReactNode;
}

export const ProjectsHero = ({ children }: Props) => {
  return (
    <section className={STYLE.CONTAINER}>
      <div className={STYLE.BASE}>
        <div className={STYLE.HEADING.CONTAINER}>
          <h1 className={STYLE.HEADING.BASE}>Сделано с {ORGANIZATION_SHORT_NAME}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};
