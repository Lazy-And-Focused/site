import type { SVGProps } from 'react';
import { STYLE } from './style';
import { ThemeSwitcher } from '@/shared/components/ui/theme-switcher';

type SocialLink = {
  id: string;
  href: string;
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

interface Props {
  links: SocialLink[];
  linkSize?: number;
}

export const AppHeaderRightSection = ({ links, linkSize = 18 }: Props) => {
  return (
    <div className={STYLE.CONTAINER}>
      {links.map(({ id, href, name, icon: Icon }) => (
        <a
          key={id}
          title={name}
          href={href}
          target='_blank'
          rel='noreferrer'
          className={STYLE.LINK}
        >
          <span className={'sr-only'}>{name}</span>
          {<Icon width={linkSize} height={linkSize} />}
        </a>
      ))}

      <ThemeSwitcher />
    </div>
  );
};
