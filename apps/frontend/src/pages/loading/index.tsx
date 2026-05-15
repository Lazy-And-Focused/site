import { Loading } from './ui/loading';

const LoadingPage = () => {
  return (
    <main
      className={[
        'h-screen max-h-screen w-full',
        'bg-cover bg-center bg-no-repeat',
        "bg-[#d88188] bg-[url('/images/backgrounds/pink.png')]",
        'dark:bg-[#205848] dark:bg-none',
      ].join(' ')}
    >
      <Loading />
    </main>
  );
};

export default LoadingPage;
