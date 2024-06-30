import React, { useState } from "react";
import { sideMenu } from "@/utils/constants";
import { SideMenu } from "@/utils/types";
import { Box, Text, Flex } from "@chakra-ui/react";
import SubMenu from "./SubMenu";
import AngleDownIcon from "../icons/AngleDownIcon";
import { useTranslation } from "react-i18next";
import EasyTravelIcon from "../logos/EasyTravelIcon";
import { chakraUiTheme } from "@/utils/theme";
import Link from "next/link";

const Sidebar = () => {
  const { t } = useTranslation();
  const [clickedMenuInfo, setClickedMenuInfo] = useState<SideMenu>();
  const [isHovered, setIsHovered] = useState<{
    id: number | undefined;
    hovered: boolean;
  }>();

  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      bottom={0}
      display={"flex"}
      flexDirection={"column"}
      width={"sidebarWidth"}
      height={"100dvh"}
      backgroundColor={"darkPrimary"}
      zIndex={"sidebar"}
      fontSize={"14px"}
      overflowY={"auto"}
      overflowX={"hidden"}
      transition={"width 0.3s"}
      _hover={{ width: "sidebarOpenWidth" }}
    >
      <Box
        width={"100%"}
        padding={"9px 0px 10px 0px"}
        borderBottom={"defaultDotted"}
      >
        <EasyTravelIcon width={"100%"} />
      </Box>
      <Flex as={"nav"} width={"100%"}>
        <Box as="ul" width={"100%"}>
          {sideMenu.map((item) => {
            const Icon = item.icon;
            const isSidebarOpen =
              item.id === clickedMenuInfo?.id && !!item?.subMenu;
            const isItemHovered = isHovered?.id === item.id;
            return (
              <Box as="li" key={item.id} userSelect={"none"}>
                <Link
                  href={item.path as string}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    width: "100%",
                    padding: "4px 14px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => {
                    setIsHovered({ id: item.id, hovered: true });
                  }}
                  onMouseLeave={() => {
                    setIsHovered({ id: undefined, hovered: false });
                  }}
                  onClick={() => {
                    setClickedMenuInfo((prev) => {
                      if (prev?.id === item.id) {
                        return;
                      }
                      return item;
                    });
                  }}
                >
                  <Icon
                    width={"20px"}
                    height={"20px"}
                    fill={
                      isItemHovered ? "white" : chakraUiTheme.colors.darkWhite
                    }
                    style={{
                      minWidth: "20px",
                      marginRight: "16px",
                      transition: "fill 0.3s",
                    }}
                  />
                  <Text
                    minWidth={"170px"}
                    whiteSpace={"nowrap"}
                    color={
                      isItemHovered ? "white" : chakraUiTheme.colors.darkWhite
                    }
                    transition={"color 0.3s"}
                  >
                    {t(item.label)}
                  </Text>
                  {!!item.subMenu && (
                    <AngleDownIcon
                      width={"16px"}
                      height={"16px"}
                      fill={
                        isItemHovered ? "white" : chakraUiTheme.colors.darkWhite
                      }
                      style={{
                        minWidth: "16px",
                        transform: isSidebarOpen
                          ? "rotateX(180deg)"
                          : "rotateX(0deg)",
                        transition: "transform 0.3s, fill 0.3s",
                      }}
                    />
                  )}
                </Link>
                <SubMenu isOpen={isSidebarOpen} data={item} />
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
