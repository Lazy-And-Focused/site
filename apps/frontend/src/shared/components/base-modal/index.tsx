import { forwardRef } from 'react';
import { changeModalState, MODALS_STATES } from './utils';
import { STYLES } from './styles';

export type BaseModalProps = {
  children: React.ReactNode;
  placeholderItem?: React.ReactNode;
  closeButtonPosition?: 'top' | 'bottom';
  showDivider?: boolean;
  className?: {
    container?: string;
    dialog?: string;
    content?: string;
    backdrop?: string;
    closeButton?: string;
  };
};

export const BaseModal = forwardRef<HTMLDialogElement, BaseModalProps>(
  (
    { children, placeholderItem, closeButtonPosition = 'top', showDivider = false, className = {} },
    ref,
  ) => {
    const handleClose = () => {
      if (ref && typeof ref === 'object' && ref.current) {
        changeModalState(ref, MODALS_STATES.HIDE);
      }
    };

    return (
      <>
        {placeholderItem && (
          <div className={className.container || STYLES.CONTAINER}>{placeholderItem}</div>
        )}

        <dialog ref={ref} className={className.dialog || STYLES.MODAL.DIALOG}>
          <div className={className.content || STYLES.MODAL.CONTAINER}>
            {closeButtonPosition === 'top' && (
              <button
                className={className.closeButton || STYLES.MODAL.CLOSE_BUTTON}
                onClick={handleClose}
              >
                ✕ Закрыть
              </button>
            )}

            {children}

            {closeButtonPosition === 'bottom' && (
              <>
                {showDivider && <hr className='border-primary' />}
                <button
                  className={className.closeButton || STYLES.MODAL.CLOSE_BUTTON}
                  onClick={handleClose}
                >
                  ✕ Закрыть
                </button>
              </>
            )}
          </div>

          <form method='dialog' className={className.backdrop || STYLES.MODAL.BACKDROP}>
            <button onClick={handleClose}>close</button>
          </form>
        </dialog>
      </>
    );
  },
);
