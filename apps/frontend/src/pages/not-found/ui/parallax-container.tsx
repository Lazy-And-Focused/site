import { MouseParallaxContainer } from 'react-parallax-mouse';

interface ParallaxContainerProps {
  children: React.ReactNode;
  globalFactorX?: number;
  globalFactorY?: number;
}

export const ParallaxContainer = ({
  children,
  globalFactorX = 0.1,
  globalFactorY = 0.1,
}: ParallaxContainerProps) => {
  return (
    <MouseParallaxContainer
      globalFactorX={globalFactorX}
      globalFactorY={globalFactorY}
      className='relative flex h-screen w-full skew-x-6 skew-y-6 flex-col items-center justify-center px-6 pt-8 lg:px-8'
    >
      {/* Без фрагмента ошибка типа */}
      <>{children}</>
    </MouseParallaxContainer>
  );
};
