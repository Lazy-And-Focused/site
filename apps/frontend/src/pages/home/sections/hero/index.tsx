import { STYLE } from './style';

export interface HeroSectionProps {
  title: string;
  description?: string;
  background?: string;
  children?: React.ReactNode;
}

export const HeroSection = ({ title, description, background, children }: HeroSectionProps) => {
  const sectionStyle = background ? { backgroundImage: `url('${background}')` } : undefined;

  return (
    <section className={STYLE.CONTAINER} style={sectionStyle}>
      <div className={STYLE.CONTENT.WRAPPER}>
        <div className={STYLE.CONTENT.INNER}>
          <h1 className={STYLE.CONTENT.TITLE}>{title}</h1>
          {description && <p className={STYLE.CONTENT.DESCRIPTION}>{description}</p>}
          {children && <div className={STYLE.CONTENT.ACTIONS}>{children}</div>}
        </div>
      </div>
    </section>
  );
};
