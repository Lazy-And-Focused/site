export type BrowserTab = {
  id: string | number;
  name: string;
  favicon?: string;
  element: React.ReactNode;
};