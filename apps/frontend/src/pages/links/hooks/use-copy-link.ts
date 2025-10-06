import { useRef, useCallback } from 'react';

/**
 * Хук для копирования ссылки на _текущую_ страницу
 */
export const useCopyLink = () => {
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const copyLinkPage = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);

    if (copyButtonRef.current?.innerText) {
      copyButtonRef.current.innerText = 'Скопировано!';

      setTimeout(() => {
        if (copyButtonRef.current) {
          copyButtonRef.current.innerText = 'Скопировать адрес страницы';
        }
      }, 1000);
    }
  }, []);

  return { copyButtonRef, copyLinkPage };
};
