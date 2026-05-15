import { STYLE } from './style';

export const MemberCardName = ({ name }: { name: string }) => {
  return <h3 className={STYLE.HEADING}>{name}</h3>;
};