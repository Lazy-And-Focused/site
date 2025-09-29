import { Loading } from '@/shared/components/loading';

const LoadingPage = () => {
  return (
    <main className='h-screen max-h-screen w-full bg-[#d88188] bg-[url("/images/backgrounds/pink.png")] bg-cover bg-center bg-no-repeat dark:bg-[#205848] dark:bg-none'>
      <Loading />
    </main>
  );
};
export default LoadingPage;
