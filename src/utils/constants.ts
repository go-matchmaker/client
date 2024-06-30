import HouseIcon from "@/components/icons/sidebar/HouseIcon";
import { SideMenu } from "./types";
import TicketIcon from "@/components/icons/sidebar/TicketIcon";
import CarIcon from "@/components/icons/sidebar/CarIcon";

export const sideMenu: SideMenu[] = [
  {
    id: 1,
    icon: HouseIcon,
    label: "home",
    path: "/",
  },
  {
    id: 2,
    icon: TicketIcon,
    label: "ticket_management",
    path: "/ticket-management",
    subMenu: [
      {
        id: 1,
        label: "ticket_management",
        path: "/ticket_management/ticket_management",
      },
      {
        id: 2,
        label: "new_ticket_create",
        path: "/ticket_management/new_ticket_create",
      },
      { id: 3, label: "pnr_inquiry", path: "/ticket_management/pnr_inquiry" },
    ],
  },
  {
    id: 3,
    icon: CarIcon,
    label: "car_management",
    path: "/car-management",
    subMenu: [
      {
        id: 1,
        label: "car_management",
        path: "/car_management/status_management",
      },
      {
        id: 2,
        label: "new_car_create",
        path: "/car_management/new_car_create",
      },
      { id: 3, label: "brand", path: "/car_management/brand" },
      { id: 4, label: "model", path: "/car_management/model" },
      { id: 5, label: "color", path: "/car_management/color" },
      { id: 6, label: "fuel", path: "/car_management/fuel" },
    ],
  },
];
