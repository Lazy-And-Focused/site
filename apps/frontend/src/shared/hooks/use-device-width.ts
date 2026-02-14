import { useState, useEffect } from 'react';

/**
 * Хук, возвращающий текущую ширину окна браузера.
 */
export function useDeviceWidth(): number {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
export default useDeviceWidth;
