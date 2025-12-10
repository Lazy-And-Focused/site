import { forwardRef } from 'react';

import { BaseModal, BaseModalProps } from '@shared/components/base-modal';

export const CardMemberModal = forwardRef<HTMLDialogElement, BaseModalProps>((props, ref) => {
  return <BaseModal ref={ref} {...props} closeButtonPosition='bottom' showDivider={true} />;
});
