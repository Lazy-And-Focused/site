export const enum MODALS_STATES {
  SHOW = 'show',
  HIDE = 'hide',
}

export function changeModalState(
  modalRef: React.RefObject<HTMLDialogElement>,
  newState: MODALS_STATES,
) {
  if (!modalRef.current) {
    return null;
  }

  switch (newState) {
    case MODALS_STATES.SHOW:
      modalRef.current.showModal();
      break;
    case MODALS_STATES.HIDE:
      modalRef.current.close();
      break;
  }
}
