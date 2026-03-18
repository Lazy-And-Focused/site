import { useRef, useCallback } from 'react';

/**
 * Хук для копирования ссылки на _текущую_ страницу
 */
export const useCopy = (
  placeholder: string = 'Скопировать адрес страницы',
  successPlaceholder: string = 'Скопировано!',
) => {
  const ref = useRef<HTMLButtonElement>(null);

  const copyCurrentUrl = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);

    if (ref.current?.innerText) {
      ref.current.innerText = successPlaceholder;

      setTimeout(() => {
        if (ref.current) {
          ref.current.innerText = placeholder;
        }
      }, 1000);
    }
  }, [placeholder, successPlaceholder]);

  return { ref, copyCurrentUrl };
};
