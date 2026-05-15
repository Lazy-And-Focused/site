import { MouseParallaxChild } from 'react-parallax-mouse';

interface ParallaxItemProps {
  children: React.ReactNode;
  factorX?: number;
  factorY?: number;
}

export const ParallaxItem = ({ children, factorX = 0.1, factorY = 0.1 }: ParallaxItemProps) => {
  return (
    <MouseParallaxChild
      factorX={factorX}
      factorY={factorY}
      className='mx-auto flex max-w-2xl flex-col items-center justify-center text-center text-slate-200 sm:text-xl/8'
    >
      {/* Без фрагмента ошибка типа */}
      <>{children}</>
    </MouseParallaxChild>
  );
};
