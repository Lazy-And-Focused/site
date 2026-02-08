import type { SocialLink } from '@/shared/types';

import { CardMemberBaseModal } from '../base-modal';

import { changeModalState, MODALS_STATES } from '../../../base-modal/utils';
import { STYLE } from './style';

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
