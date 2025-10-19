interface Props {
  id?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const CreditsSection = ({ id, title, description, children }: Props) => {
  return (
    <section
      id={id}
      className='flex min-h-full w-full flex-col items-center justify-center px-8 py-16 lg:px-12'
    >
      <h2 className='text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
        {title}
      </h2>

      <p className='my-8 text-lg text-base-content/40'>{description}</p>

      {children}
    </section>
  );
};
