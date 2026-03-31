import { Link } from 'react-router';
import { ParallaxContainer, ParallaxItem } from './ui';

import { HeartBreakIcon, ListIcon } from '@icons';

import { NOT_FOUND_CONFIG } from './lib/constants';
import { STYLE } from './style';

const { GLOBAL_FACTOR_X, GLOBAL_FACTOR_Y } = NOT_FOUND_CONFIG.PARALLAX.CONTAINER;
const { CONTENT: PAGE_CONTENT } = NOT_FOUND_CONFIG;
const PARALLAX_ITEMS = NOT_FOUND_CONFIG.PARALLAX.ITEMS;

const NotFoundPage = () => {
  return (
    <main className={STYLE.MAIN}>
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
      return <HeartBreakIcon height={128} width={128} className={STYLE.ICON} />;
    case 'title':
      return <h1 className={STYLE.TITLE}>{PAGE_CONTENT.TITLE}</h1>;

    case 'description':
      return <p className={STYLE.DESCRIPTION}>{PAGE_CONTENT.DESCRIPTION}</p>;

    case 'button':
      return (
        <Link to={'/'} className={STYLE.BUTTON}>
          <ListIcon /> {PAGE_CONTENT.BUTTON_TEXT}
        </Link>
      );

    default:
      return null;
  }
};

export default NotFoundPage;
