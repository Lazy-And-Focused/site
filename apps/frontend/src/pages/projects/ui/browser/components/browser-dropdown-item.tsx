import type { BrowserTab } from '../types';

interface BrowserDropdownItemProps {
  tab: BrowserTab;
  selected: boolean;
  onClick: () => void;
}

export const BrowserDropdownItem = ({ tab, selected, onClick }: BrowserDropdownItemProps) => {
  return (
    <button
      className={`relative flex w-full min-w-max items-center gap-4 overflow-hidden text-ellipsis text-nowrap px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${
        selected ? 'bg-gray-100 dark:bg-gray-800' : ''
      }`}
      onClick={onClick}
    >
      {tab.favicon && (
        <span className='block aspect-square h-6 overflow-clip rounded'>
          <img src={tab.favicon} alt={tab.name} className='h-full w-full' />
        </span>
      )}
      {tab.name}
    </button>
  );
};
