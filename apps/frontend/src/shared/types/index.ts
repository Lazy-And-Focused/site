export type ConfigRoute = {
  name?: string;
  path: string;
  element: React.ReactNode;
  children?: ConfigRoute[];
};

export type SocialLink = {
  href: string;
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};
