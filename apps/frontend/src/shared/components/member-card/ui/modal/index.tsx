import { forwardRef } from 'react';

import { changeModalState, MODALS_STATES } from './utils';

const STYLE = {
  CONTAINER: 'flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12',
  MODAL: {
    DIALOG: 'modal',
    CONTAINER: 'modal-box flex flex-col gap-4',
    BACKDROP: 'modal-backdrop [&_button]:cursor-default',
    CLOSE_BUTTON: 'btn btn-ghost',
  },
} as const;

type Props = {
  children: React.ReactNode;
  placeholderItem: React.ReactNode;
};

export const CardMemberModal = forwardRef<HTMLDialogElement, Props>(
  ({ children, placeholderItem }, ref) => {
    const handleClose = () => {
      if (ref && typeof ref === 'object' && ref.current) {
        changeModalState(ref, MODALS_STATES.HIDE);
      }
    };

    return (
      <nav className={STYLE.CONTAINER}>
        {placeholderItem}

        <dialog ref={ref} className={STYLE.MODAL.DIALOG}>
          <div className={STYLE.MODAL.CONTAINER}>
            {children}
            <hr className={'border-primary'} />
            <button className={STYLE.MODAL.CLOSE_BUTTON} onClick={handleClose}>
              ✕ Закрыть
            </button>
          </div>
          <form method='dialog' className={STYLE.MODAL.BACKDROP}>
            <button onClick={handleClose}>close</button>
          </form>
        </dialog>
      </nav>
    );
  },
);
