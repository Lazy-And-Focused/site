import { forwardRef } from 'react';

import { changeModalState, MODALS_STATES } from './utils';

const STYLE = {
  CONTAINER: 'flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12',
  MODAL: {
    DIALOG: 'modal',
    CONTAINER: 'modal-box flex flex-col gap-4',
    BACKDROP: 'modal-backdrop',
    CLOSE_BUTTON: 'btn btn-circle btn-ghost btn-sm absolute right-2 top-2',
  },
} as const;

export const AppHeaderModalNavigation = forwardRef<
  HTMLDialogElement,
  { children: React.ReactNode; placeholderItem: React.ReactNode }
>(({ children, placeholderItem }, ref) => {
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
          <button className={STYLE.MODAL.CLOSE_BUTTON} onClick={handleClose}>
            ✕
          </button>
          {children}
        </div>
        <form method='dialog' className={STYLE.MODAL.BACKDROP}>
          <button onClick={handleClose}>close</button>
        </form>
      </dialog>
    </nav>
  );
});
