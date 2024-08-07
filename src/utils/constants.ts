import HouseIcon from "@/components/icons/sidebar/HouseIcon";
import { SideMenu } from "./types";
import TicketIcon from "@/components/icons/sidebar/TicketIcon";
import CarIcon from "@/components/icons/sidebar/CarIcon";
import { SidebarIds } from "./enums";

export const sideMenu: SideMenu[] = [
  {
    id: SidebarIds.Home,
    icon: HouseIcon,
    label: "home",
    path: "/",
  },
  {
    id: SidebarIds.TicketManagement,
    icon: TicketIcon,
    label: "ticket_management",
    isSubMenuOpen: false,
    subMenu: [
      {
        id: 1,
        label: "ticket_management",
        path: "/ticket-management",
      },
      {
        id: 2,
        label: "new_ticket_create",
        path: "/ticket-management/new-ticket-create",
      },
      { id: 3, label: "pnr_inquiry", path: "/ticket-management/pnr-inquiry" },
    ],
  },
  {
    id: SidebarIds.CarManagement,
    icon: CarIcon,
    label: "car_management",
    isSubMenuOpen: false,
    subMenu: [
      {
        id: 1,
        label: "car_management",
        path: "/car-management",
      },
      {
        id: 2,
        label: "new_car_create",
        path: "/car-management/new-car-create",
      },
      { id: 3, label: "brand", path: "/car-management/brand" },
      { id: 4, label: "model", path: "/car-management/model" },
      { id: 5, label: "color", path: "/car-management/color" },
      { id: 6, label: "fuel", path: "/car-management/fuel" },
    ],
  },
];
