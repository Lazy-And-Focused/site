export const STYLES = {
  CONTAINER: 'flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12',
  MODAL: {
    DIALOG: 'modal',
    CONTAINER: 'modal-box flex flex-col gap-4',
    BACKDROP: 'modal-backdrop [&_button]:cursor-default',
    CLOSE_BUTTON: 'btn btn-ghost',
  },
} as const;
