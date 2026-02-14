import type { BrowserTab } from '../../types';

import { BrowserDropdownItem } from './item';

interface Props {
  tabs: BrowserTab[];
  currentTab: BrowserTab | null;
  setCurrentTab: (tab: BrowserTab | null) => void;
  setDropdownOpened: (tab: boolean) => void;
}

export const BrowserDropdownContent = ({
  tabs,
  currentTab,
  setCurrentTab,
  setDropdownOpened,
}: Props) => {
  return (
    <div className='absolute right-0 z-10 mt-1 w-full min-w-min overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900'>
      <BrowserDropdownItem
        tab={{ id: '$null', name: 'Вкладка не выбрана', element: null }}
        selected={currentTab === null}
        onClick={() => {
          setCurrentTab(null);
          setDropdownOpened(false);
        }}
      />

      {tabs.map((tab) => (
        <BrowserDropdownItem
          key={tab.id || tab.name}
          tab={tab}
          selected={currentTab?.id === tab.id}
          onClick={() => {
            setCurrentTab(tab);
            setDropdownOpened(false);
          }}
        />
      ))}
    </div>
  );
};
