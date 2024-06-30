import { FC, SVGProps } from "react";

export type SideMenu = {
  id: number;
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  path: string | undefined;
  subMenu?: {
    id: number;
    label: string;
    path: string;
  }[];
};
