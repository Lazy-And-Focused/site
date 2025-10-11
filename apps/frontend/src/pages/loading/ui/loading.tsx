export function Loading() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center text-center text-slate-100'>
      <span className='aspect-ratio loading loading-ring absolute aspect-square h-auto w-56' />
    </div>
  );
}
