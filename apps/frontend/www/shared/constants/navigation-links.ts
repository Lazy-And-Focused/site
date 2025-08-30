import type { ForwardRefExoticComponent, RefAttributes } from "react";

import { LucideProps } from "lucide-react";
import { APP_ROUTES } from "./routes";

export type NavigationItem = {
  // General
  name: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  description?: string;

  // For links
  href?: string;

  // Children :p
  children?: React.ReactNode;
};

export const NAVIGATION_LINKS: NavigationItem[] = [
  {
    name: "Главная",
    href: APP_ROUTES.landing,
  },
  {
    name: "Проекты",
    href: APP_ROUTES.projects
  },
  {
    name: "О нас",
    href: APP_ROUTES.about
  }
];
