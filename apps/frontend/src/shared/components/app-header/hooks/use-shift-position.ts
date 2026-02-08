import { useEffect, useState } from 'react';

export const useShiftPosition = (): boolean => {
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      return setShift(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return shift > 0;
};
