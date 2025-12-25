import type { SocialLink } from '@/shared/types';

import { CardMemberBaseModal } from './base-modal';

import { changeModalState, MODALS_STATES } from '../../base-modal/utils';

const STYLE = {
  CONTAINER: 'col-span-1 self-center text-center',
  LIST_ITEM: {
    PARENT: [
      'list-none items-center gap-2 transition-colors',
      'hover:text-primary hover:underline',
    ].join(' '),
    LINK: [
      'relative flex w-full min-w-max',
      'items-center justify-start gap-2 px-4 py-2',
      'text-ellipsis text-nowrap text-left',
      'overflow-hidden rounded-md hover:bg-base-300/50',
    ].join(' '),
    LINL_SPAN: 'flex aspect-square h-6 items-center justify-start overflow-clip rounded',
  },
} as const;

export const MemberCardModal = ({
  memberSocials,
  socialsRef,
}: {
  memberSocials: SocialLink[];
  socialsRef: React.MutableRefObject<HTMLDialogElement | null>;
}) => {
  return (
    <CardMemberBaseModal
      placeholderItem={
        <button
          className={STYLE.CONTAINER}
          onClick={() => changeModalState(socialsRef, MODALS_STATES.SHOW)}
        >
          +{memberSocials.slice(5).length}
        </button>
      }
      ref={socialsRef}
    >
      {memberSocials.map((social) => (
        <li className={STYLE.LIST_ITEM.PARENT} key={social.id}>
          <a href={social.url} target='_blank' rel='noreferrer' className={STYLE.LIST_ITEM.LINK}>
            {social.platform.icon && (
              <span className={STYLE.LIST_ITEM.LINL_SPAN}>
                <social.platform.icon className='h-4 w-4' />
              </span>
            )}
            {social.customName || social.platform.name}
          </a>
        </li>
      ))}
    </CardMemberBaseModal>
  );
};
