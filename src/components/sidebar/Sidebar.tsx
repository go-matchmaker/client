import React, { useState } from "react";
import { sideMenu } from "@/utils/constants";
import { Box, Text, Flex } from "@chakra-ui/react";
import SubMenu from "./SubMenu";
import { useTranslation } from "react-i18next";
import EasyTravelIcon from "../logos/EasyTravelIcon";
import { chakraUiTheme } from "@/utils/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const { t } = useTranslation();
  const [isSidebarMenuHovered, setIsSidebarMenuHovered] = useState(false);
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
      onMouseEnter={() => {
        setIsSidebarMenuHovered(true);
      }}
      onMouseLeave={() => {
        setIsSidebarMenuHovered(false);
      }}
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

            if (!!item.subMenu) {
              return (
                <SubMenu
                  key={item.id}
                  data={item}
                  isSidebarMenuHovered={isSidebarMenuHovered}
                />
              );
            }

            return (
              <Box key={item.id} as="li" padding={0} margin={0}>
                <Link
                  href={item.path as string}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    width: "100%",
                    height: "100%",
                    padding: "8px 0px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onMouseEnter={() => {
                    setIsHovered({ id: item.id, hovered: true });
                  }}
                  onMouseLeave={() => {
                    setIsHovered({ id: undefined, hovered: false });
                  }}
                >
                  <Icon
                    width={"18px"}
                    height={"18px"}
                    fill={
                      isHovered?.hovered || item.path === pathName
                        ? "white"
                        : chakraUiTheme.colors.darkWhite
                    }
                    style={{
                      minWidth: "50px",
                      transition: "fill 0.3s",
                    }}
                  />
                  <Text
                    whiteSpace={"nowrap"}
                    width={"100%"}
                    color={
                      isHovered?.hovered || item.path === pathName
                        ? "white"
                        : chakraUiTheme.colors.darkWhite
                    }
                    transition={"color 0.3s"}
                  >
                    {t(item.label)}
                  </Text>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
