const STYLE = {
  CONTAINER: 'flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12',
};

export const AppHeaderNavigation = () => {
  return (
    <nav className={STYLE.CONTAINER}>
      <a>Rem</a>
      <a>Ram</a>
      <a>Subaru</a>
      <a>Emiliya</a>
      <a>Re:Zero TOP!</a>
    </nav>
  );
};
