const STYLE = {
  CONTAINER: 'flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12',
};

export const AppHeaderModalNavigation = ({
  children,
  ref,
  placeholderItem: placeholder,
}: {
  children: React.ReactNode;
  placeholderItem: React.ReactNode;
  ref: React.RefObject<HTMLDialogElement>;
}) => {
  return (
    <>
      <nav className={STYLE.CONTAINER}>{placeholder}</nav>

      <dialog ref={ref} className='modal'>
        <div className='modal-box flex flex-col gap-4'>{children}</div>
      </dialog>
    </>
  );
};
