import { Link } from 'react-router-dom';
import { ParallaxContainer, ParallaxItem } from './ui';

import { HeartBreakIcon, ListIcon } from '@icons';

import { NOT_FOUND_CONFIG } from './lib/constants';

const { GLOBAL_FACTOR_X, GLOBAL_FACTOR_Y } = NOT_FOUND_CONFIG.PARALLAX.CONTAINER;
const { CONTENT: PAGE_CONTENT } = NOT_FOUND_CONFIG;
const PARALLAX_ITEMS = NOT_FOUND_CONFIG.PARALLAX.ITEMS;

const NotFoundPage = () => {
  const bgClasses = [
    'h-full max-h-screen w-full overflow-clip bg-cover bg-center bg-no-repeat',
    NOT_FOUND_CONFIG.BACKGROUND.LIGHT.COLOR,
    NOT_FOUND_CONFIG.BACKGROUND.LIGHT.IMAGE,
    NOT_FOUND_CONFIG.BACKGROUND.DARK.COLOR,
    NOT_FOUND_CONFIG.BACKGROUND.DARK.IMAGE,
  ].join(' ');

  return (
    <main className={bgClasses}>
      <ParallaxContainer globalFactorX={GLOBAL_FACTOR_X} globalFactorY={GLOBAL_FACTOR_Y}>
        {PARALLAX_ITEMS.map((item, index) => (
          <ParallaxItem key={index} factorX={item.FACTOR_X} factorY={item.FACTOR_Y}>
            {renderContent(item.CONTENT)}
          </ParallaxItem>
        ))}
      </ParallaxContainer>
    </main>
  );
};

const renderContent = (type: string) => {
  switch (type) {
    case 'icon':
      return <HeartBreakIcon height={128} width={128} className='mb-14 text-slate-100' />;

    case 'title':
      return (
        <h1 className='rotate-12 text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
          {PAGE_CONTENT.TITLE}
        </h1>
      );

    case 'description':
      return <p className='mt-8 text-pretty text-lg font-medium'>{PAGE_CONTENT.DESCRIPTION}</p>;

    case 'button':
      return (
        <Link
          to={'/'}
          className='btn btn-outline btn-neutral mt-8 text-sm/6 font-semibold transition-opacity hover:opacity-50'
        >
          <ListIcon /> {PAGE_CONTENT.BUTTON_TEXT}
        </Link>
      );

    default:
      return null;
  }
};

export default NotFoundPage;
