import type { BrowserTab } from './types';

import { useState } from 'react';

import { BrowserHeader } from './components/browser-header';
import { BrowserDropdown } from './components/browser-dropdown';

interface BrowserProps {
  title?: string;
  tabs: BrowserTab[];
  children?: React.ReactNode;
}

/**
 * Компонент в стилистике web-обозревателя. Использует children, как
 * заполнитель окна.
 */
export const Browser = ({ title, tabs, children }: BrowserProps) => {
  const [currentTab, setCurrentTab] = useState<BrowserTab | null>(null);

  return (
    <div className='flex min-h-[400px] min-w-full flex-col rounded-lg bg-white shadow-lg dark:bg-gray-900 md:min-w-[600px]'>
      <div className='flex flex-row items-center justify-between gap-3 rounded-t-lg border-b border-gray-200 bg-emerald-200/15 px-4 py-2 dark:border-gray-800 dark:bg-emerald-800/15'>
        <BrowserHeader title={title} />
        <BrowserDropdown tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>

      <div className='flex-1 overflow-y-auto p-4 text-gray-900 dark:text-gray-200'>
        {(currentTab && currentTab.element) ?? children ?? 'Вкладка не выбрана'}
      </div>
    </div>
  );
};

export default Browser;
