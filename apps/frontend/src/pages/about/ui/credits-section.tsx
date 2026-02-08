const STYLE = {
  CONTAINER: [
    'flex min-h-full w-full flex-col items-center justify-center',
    'px-8 py-16 lg:px-12',
  ].join(' '),
  TITLE: 'text-3xl font-semibold tracking-tight text-base-content sm:text-4xl',
  DESCRIPTION: 'my-8 text-lg text-base-content/40',
} as const;

interface Props {
  id?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const CreditsSection = ({ id, title, description, children }: Props) => {
  return (
    <section id={id} className={STYLE.CONTAINER}>
      <h2 className={STYLE.TITLE}>{title}</h2>

      <p className={STYLE.DESCRIPTION}>{description}</p>

      {children}
    </section>
  );
};
