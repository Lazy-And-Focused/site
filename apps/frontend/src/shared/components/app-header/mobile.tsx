import type { HeaderProps } from './types';

import { useRef } from 'react';

import { ListIcon } from '@icons';
import { ThemeSwitcher } from './theme-switcher';
import { Navigation } from './navigation';

export const MobileHeader = ({ links }: HeaderProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    if (modalRef && modalRef.current) {
      modalRef.current.showModal();
    }

    return null;
  };

  const closeModal = () => {
    if (modalRef && modalRef.current) {
      modalRef.current.close();
    }

    return null;
  };

  return (
    <>
      <header className={'bg-base-100/2 fixed right-5 top-5 z-50'}>
        <button
          className='btn-circle btn-md flex h-12 w-12 flex-col items-center justify-center border-2 border-primary/75 bg-transparent p-4 text-base-content backdrop-blur-md transition duration-500 ease-in-out'
          onClick={showModal}
        >
          <ListIcon />
        </button>

        <dialog ref={modalRef} className='modal'>
          <div className='modal-box flex flex-col gap-4'>
            <Navigation links={links} onClick={closeModal} />

            <div className='modal-action grid grid-cols-2 gap-4'>
              <ThemeSwitcher className='btn btn-ghost h-5 p-2' />

              <form method='dialog' className='w-full'>
                <button className='btn btn-ghost w-full'>Закрыть</button>
              </form>
            </div>
          </div>
        </dialog>
      </header>
    </>
  );
};

export default MobileHeader;
