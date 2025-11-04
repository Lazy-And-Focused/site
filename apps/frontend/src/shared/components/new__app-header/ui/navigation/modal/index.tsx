import { forwardRef } from 'react';

import { changeModalState, MODALS_STATES } from './utils';

const STYLE = {
  CONTAINER: 'flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12',
};

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

      <dialog ref={ref} className='modal'>
        <div className='modal-box flex flex-col gap-4'>
          <button
            className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
            onClick={handleClose}
          >
            ✕
          </button>
          {children}
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button onClick={handleClose}>close</button>
        </form>
      </dialog>
    </nav>
  );
});
