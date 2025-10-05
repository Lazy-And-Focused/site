export type HeroImageSectionProps = {
  title: string;
  description?: string;
  background: string;
  children?: React.ReactNode;
};

export const HeroImageSection = ({
  title,
  description,
  background,
  children,
}: HeroImageSectionProps) => {
  return (
    <section
      className={
        'flex h-screen w-full flex-col items-center justify-center' +
        `bg-[#418d76] bg-[url("${background}")] bg-cover bg-center bg-no-repeat` +
        'px-6 pt-14 shadow-xl dark:bg-[#205848] dark:bg-none lg:px-8'
      }
    >
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='text-center'>
          <h1 className='text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
            {title}
          </h1>
          {description && (
            <p className='mt-8 text-pretty text-lg font-medium text-slate-200 sm:text-xl/8'>
              {description}
            </p>
          )}
          {children && (
            <div className='mt-10 flex items-center justify-center gap-6'>{children}</div>
          )}
        </div>
      </div>
    </section>
  );
};
