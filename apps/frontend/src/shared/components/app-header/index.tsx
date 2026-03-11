import type { HeaderNavigationLink } from './types';

import { AppHeaderLogotype } from './ui/logotype';
import { AppHeaderSocialLinks } from './ui/social-links';

import { WebsiteIcon } from '@icons';

import { useShiftPosition } from './hooks/use-shift-position';
import { useDeviceWidth } from '@shared/hooks';

import { DefaultAppHeader, MobileAppHeader } from './variants';

import { HEADER_SOCIAL_LINKS } from '@shared/lib/constants';
import { STYLE } from './style';

import clsx from 'clsx';

const socialLinks = HEADER_SOCIAL_LINKS.map((link) => ({
  id: link.id,
  href: link.url,
  name: link.customName || link.platform.name,
  icon: link.platform.icon || WebsiteIcon,
}));

type Props = { links: HeaderNavigationLink[] };

export const AppHeader = (props: Props) => {
  const shifted = useShiftPosition();
  const deviceWidth = useDeviceWidth();

  return (
    <header
      className={clsx(
        STYLE.CONTAINER.BASE,
        shifted ? STYLE.CONTAINER.SHIFTED.YES : STYLE.CONTAINER.SHIFTED.NO,
      )}
    >
      <AppHeaderLogotype />

      {deviceWidth > 670 ? <DefaultAppHeader {...props} /> : <MobileAppHeader {...props} />}

      <AppHeaderSocialLinks linkSize={20} links={socialLinks} />
    </header>
  );
};

export type { Props as AppHeaderProps };
