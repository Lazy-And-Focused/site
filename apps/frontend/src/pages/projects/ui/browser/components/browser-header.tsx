interface BrowserHeaderProps {
  title?: string;
}

export const BrowserHeader = ({ title }: BrowserHeaderProps) => {
  return (
    <div className={'text-lg font-semibold text-gray-900 dark:text-gray-200'}>
      {title ?? 'Браузер'}
    </div>
  );
};
