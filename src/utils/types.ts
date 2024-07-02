import { FC, SVGProps } from "react";
import { SidebarIds } from "./enums";

export type SidebarSubMenu = {
  id: number;
  label: string;
  path: string;
};

export type SideMenu = {
  id: SidebarIds;
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  path?: string;
  isSubMenuOpen?: boolean;
  subMenu?: SidebarSubMenu[];
};
