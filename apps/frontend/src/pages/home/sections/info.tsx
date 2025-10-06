import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@shared/lib/constants';

export const InfoSection = () => {
  return (
    <section
      id='info'
      className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
    >
      <div className='flex max-w-xl flex-col items-center justify-center text-center'>
        <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
          Чем мы занимаемся
        </h2>
        <p className='mt-6 text-lg/8 text-base-content/40'>
          Разрабатываем малые и средние IT-продукты, независимо от их типа: веб-, натив-приложения и
          игры
        </p>
        <div className='mt-8 flex flex-row gap-4'>
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
