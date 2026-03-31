import { STYLE } from './style';

export const MemberCardDescription = ({ description }: { description: string }) => {
  return <p className={STYLE.DESCRIPTION}>{description}</p>;
};