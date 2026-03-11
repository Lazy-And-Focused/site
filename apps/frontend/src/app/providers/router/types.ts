export type AppRoute = Readonly<{
  name?: string;
  path: string;
  element: React.ReactNode;
  children?: AppRoute[];
}>;
