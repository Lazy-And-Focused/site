const STYLE = {
  CONTAINER: 'flex h-full w-full flex-col items-center justify-center text-center text-slate-100',
  ANIMATION_SPAN: 'aspect-ratio loading loading-ring absolute aspect-square h-auto w-56',
};

export function Loading() {
  return (
    <div className={STYLE.CONTAINER}>
      <span className={STYLE.ANIMATION_SPAN} />
    </div>
  );
}
