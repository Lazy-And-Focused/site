import { forwardRef } from 'react';
import { BaseModal, BaseModalProps } from '@shared/components/base-modal';
import { STYLE } from '../style';

export const AppHeaderModalNavigation = forwardRef<HTMLDialogElement, BaseModalProps>(
  (props, ref) => {
    return (
      <nav className={STYLE.CONTAINER}>
        <BaseModal ref={ref} {...props} closeButtonPosition='bottom' showDivider={false} />
      </nav>
    );
  },
);
