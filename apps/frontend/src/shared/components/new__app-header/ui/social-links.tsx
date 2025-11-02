import type { SVGProps } from 'react';

const STYLE = {
  CONTAINER: 'flex flex-row items-center justify-end gap-3',
};

type SocialLink = {
  id: string;
  href: string;
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const AppHeaderSocialLinks = ({
  links,
  linkSize = 18,
}: {
  links: SocialLink[];
  linkSize?: number;
}) => {
  return (
    <div className={STYLE.CONTAINER}>
      {links.map(({ id, href, name, icon: Icon }) => (
        <a key={id} title={name} href={href} target='_blank' rel='noreferrer'>
          <span className={'sr-only'}>{name}</span>
          {<Icon width={linkSize} height={linkSize} />}
        </a>
      ))}
    </div>
  );
};
