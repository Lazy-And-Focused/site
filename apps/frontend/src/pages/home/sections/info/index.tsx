import { Link } from 'react-router-dom';

import { APP_ROUTES } from '@shared/lib/constants';
import { STYLE } from './style';

export const InfoSection = () => {
  return (
    <section id='info' className={STYLE.CONTAINER}>
      <div className={STYLE.CONTENT.WRAPPER}>
        <h2 className={STYLE.CONTENT.TITLE}>Чем мы занимаемся</h2>
        <p className={STYLE.CONTENT.DESCRIPTION}>
          Разрабатываем малые и средние IT-продукты, независимо от их типа: веб-, натив-приложения и
          игры
        </p>
        <div className={STYLE.CONTENT.ACTIONS}>
          <Link to='/#members' className='btn btn-outline btn-primary rounded-md'>
            А кто вы такие?
          </Link>
          <Link to={APP_ROUTES.PROJECTS} className='btn btn-ghost btn-primary rounded-md'>
            К проектам <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
