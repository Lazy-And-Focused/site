import { forwardRef } from 'react';

import { BaseModal, BaseModalProps } from '@shared/components/base-modal';

export const AppHeaderModalNavigation = forwardRef<HTMLDialogElement, BaseModalProps>(
  (props, ref) => {
    return (
      <nav className='flex justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12'>
        <BaseModal ref={ref} {...props} closeButtonPosition='bottom' showDivider={false} />
      </nav>
    );
  },
);
