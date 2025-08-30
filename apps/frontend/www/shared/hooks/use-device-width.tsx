import { useState, useEffect } from "react";

/**
 * Хук, возвращающий текущую ширину окна браузера.
 *
 * @example
 *  // Экран 1280x720
 *  const ww = useDeviceWidth(); // 1280
 *  // Экран 690x480
 *  const ww = useDeviceWidth(); // 690
 */
export function useDeviceWidth(): number {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export default useDeviceWidth;
