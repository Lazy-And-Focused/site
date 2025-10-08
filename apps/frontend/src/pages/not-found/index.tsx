import { Link } from 'react-router-dom';
import { ParallaxContainer, ParallaxItem } from './ui';

import { HeartBreakIcon, ListIcon } from '@icons';

import { NOT_FOUND_CONFIG } from './lib/constants';

const NotFoundPage = () => {
  const bgClasses = [
    'h-full max-h-screen w-full overflow-clip bg-cover bg-center bg-no-repeat',
    NOT_FOUND_CONFIG.background.light.color,
    NOT_FOUND_CONFIG.background.light.image,
    NOT_FOUND_CONFIG.background.dark.color,
    NOT_FOUND_CONFIG.background.dark.image,
  ].join(' ');

  return (
    <main className={bgClasses}>
      <ParallaxContainer
        globalFactorX={NOT_FOUND_CONFIG.parallax.container.globalFactorX}
        globalFactorY={NOT_FOUND_CONFIG.parallax.container.globalFactorY}
      >
        {NOT_FOUND_CONFIG.parallax.items.map((item, index) => (
          <ParallaxItem key={index} factorX={item.factorX} factorY={item.factorY}>
            {renderContent(item.content)}
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
          {NOT_FOUND_CONFIG.content.title}
        </h1>
      );

    case 'description':
      return (
        <p className='mt-8 text-pretty text-lg font-medium'>
          {NOT_FOUND_CONFIG.content.description}
        </p>
      );

    case 'button':
      return (
        <Link
          to={'/'}
          className='btn btn-outline btn-neutral mt-8 text-sm/6 font-semibold transition-opacity hover:opacity-50'
        >
          <ListIcon /> {NOT_FOUND_CONFIG.content.buttonText}
        </Link>
      );

    default:
      return null;
  }
};

export default NotFoundPage;
