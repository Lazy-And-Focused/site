import type { BrowserTab } from '../types';

import { useState } from 'react';

import { BrowserDropdownItem } from './browser-dropdown-item';
import { ListIcon } from '@icons';

interface BrowserDropdownProps {
  tabs: BrowserTab[];
  currentTab: BrowserTab | null;
  setCurrentTab: (tab: BrowserTab | null) => void;
}

export const BrowserDropdown = ({ tabs, currentTab, setCurrentTab }: BrowserDropdownProps) => {
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
          <BrowserDropdownItem
            tab={{ id: '$null', name: 'Вкладка не выбрана', element: null }}
            isSelected={currentTab === null}
            onClick={() => {
              setCurrentTab(null);
              setDropdownOpened(false);
            }}
          />

          {tabs.map((tab) => (
            <BrowserDropdownItem
              key={tab.id || tab.name}
              tab={tab}
              isSelected={currentTab?.id === tab.id}
              onClick={() => {
                setCurrentTab(tab);
                setDropdownOpened(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};