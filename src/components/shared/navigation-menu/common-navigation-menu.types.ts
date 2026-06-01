import type { ReactNode } from "react";

interface NavigationMenuOption {
  title: string;
  description?: string;
  href: string;
  icon?: ReactNode;
}

export interface CommonNavigationMenuProps {
  trigger: ReactNode;
  options: NavigationMenuOption[];
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
