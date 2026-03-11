import { STYLE } from './style';

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
