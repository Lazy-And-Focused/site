import type { BrowserTab } from '../../types';

import { useState } from 'react';

import { BrowserDropdownContent } from './content';

import { ListIcon } from '@icons';

interface Props {
  tabs: BrowserTab[];
  currentTab: BrowserTab | null;
  setCurrentTab: (tab: BrowserTab | null) => void;
}

export const BrowserDropdown = ({ tabs, currentTab, setCurrentTab }: Props) => {
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
        <BrowserDropdownContent
          tabs={tabs}
          setCurrentTab={setCurrentTab}
          setDropdownOpened={setDropdownOpened}
          currentTab={currentTab}
        />
      )}
    </div>
  );
};
