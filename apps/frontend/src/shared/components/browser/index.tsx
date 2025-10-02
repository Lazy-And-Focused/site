import type { BrowserTab } from './types';

import { useState } from 'react';
import { ListIcon } from '../ui/icons';

type Props = {
  title?: string;
  tabs: BrowserTab[];
  children?: React.ReactNode;
};

/**
 * Компонент в стилистике web-обозревателя. Использует chidlren, как
 * заполнитель.
 */
export const Browser = ({
  /** Заголовок окна */
  title,
  tabs,
  children,
}: Props) => {
  const [currentTab, setCurrentTab] = useState<BrowserTab | null>(null);

  return (
    <div className='flex min-h-[400px] min-w-full flex-col rounded-lg bg-white shadow-lg dark:bg-gray-900 md:min-w-[600px]'>
      <div className='flex flex-row items-center justify-between gap-3 rounded-t-lg border-b border-gray-200 bg-emerald-200/15 px-4 py-2 dark:border-gray-800 dark:bg-emerald-800/15'>
        <BrowserHeader title={title} />
        <BrowserDropdrown tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>

      <div className='flex-1 overflow-y-auto p-4 text-gray-900 dark:text-gray-200'>
        {(currentTab && currentTab.element) ?? children ?? 'Вкладка не выбрана'}
      </div>
    </div>
  );
};

const BrowserHeader = ({ title }: { title?: string }) => {
  return (
    <div className={'text-lg font-semibold text-gray-900 dark:text-gray-200'}>
      {title ?? 'Браузер'}
    </div>
  );
};

const BrowserDropdrown = ({
  tabs,
  currentTab,
  setCurrentTab,
}: {
  tabs: BrowserTab[];
  currentTab: BrowserTab | null;
  setCurrentTab: (tab: BrowserTab | null) => void;
}) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <div className='relative'>
      <button
        className='flex min-w-40 max-w-max cursor-pointer items-center justify-end gap-x-2 rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-900'
        onClick={() => setDropdownOpened(!dropdownOpened)}
      >
        {currentTab ? currentTab.name : 'Выберите вкладку'}
        <ListIcon />
      </button>

      {dropdownOpened && (
        <div className='absolute right-0 z-10 mt-1 w-full min-w-min overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900'>
          <BrowserDropdrownItem
            tab={{ id: '$null', name: 'Вкладка не выбрана', element: null }}
            currentTab={null}
            onClick={() => (setCurrentTab(null), setDropdownOpened(false))}
          />

          {tabs.map((tab) => (
            <BrowserDropdrownItem
              key={tab.id || tab.name}
              tab={tab}
              currentTab={currentTab}
              onClick={() => (setCurrentTab(tab), setDropdownOpened(false))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const BrowserDropdrownItem = ({
  tab,
  currentTab,
  onClick,
}: {
  tab: BrowserTab;
  currentTab: BrowserTab | null;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`relative flex w-full min-w-max items-center gap-4 overflow-hidden text-ellipsis text-nowrap px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${
        currentTab === tab ? 'bg-gray-100 dark:bg-gray-800' : ''
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

export default Browser;
