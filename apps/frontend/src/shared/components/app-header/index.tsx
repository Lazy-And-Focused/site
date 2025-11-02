import type { HeaderProps } from './types';

import { useDeviceWidth } from '@/shared/hooks';

import { MobileHeader } from './variants/mobile';
import { DefaultHeader } from './variants/default';

export const AppHeader = (props: HeaderProps) => {
  const deviceWidth = useDeviceWidth();

  if (deviceWidth <= 690) {
    return <MobileHeader {...props} />;
  }

  return <DefaultHeader {...props} />;
};
