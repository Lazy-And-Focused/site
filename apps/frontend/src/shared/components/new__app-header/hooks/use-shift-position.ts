import { useEffect, useState } from 'react';

export const useShiftPosition = (): boolean => {
  const [shift, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return shift > 0;
};
