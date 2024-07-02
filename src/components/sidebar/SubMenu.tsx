import React, { FC, useMemo, useState } from "react";
import { chakraUiTheme } from "@/utils/theme";
import { SideMenu } from "@/utils/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import AngleDownIcon from "../icons/AngleDownIcon";
import { SidebarIds } from "@/utils/enums";

interface Props {
  data: SideMenu;
  isSidebarMenuHovered: boolean;
}
const SubMenu: FC<Props> = ({ data, isSidebarMenuHovered }) => {
  const pathName = usePathname();
  const { t } = useTranslation();
  const [isSubHeaderHovered, setIsSubHeaderHovered] = useState<{
    id: number | undefined;
    hovered: boolean;
  }>();
  const [isSubMenuHovered, setIsSubMenuHovered] = useState<{
    id: number | undefined;
    hovered: boolean;
  }>();
  const [clickedInfo, setClickedInfo] = useState<SideMenu>();

  const activeSubMenuHeader = useMemo(() => {
    const subPathName = data?.subMenu?.map((item) => item.path);

    if (subPathName?.includes(pathName) && isSidebarMenuHovered) {
      setClickedInfo(data);
    } else {
      setClickedInfo(undefined);
    }

    return subPathName?.includes(pathName);
  }, [data, isSidebarMenuHovered, pathName]);

  return (
    <Flex as={"li"} flexDirection={"column"} userSelect={"none"}>
      <Flex
        alignItems={"center"}
        cursor={"pointer"}
        padding={
          data?.id === SidebarIds.TicketManagement
            ? "0px 0px 4px 0px"
            : "8px 0px 4px 0px"
        }
        onClick={() => {
          setClickedInfo((prev) => {
            if (prev?.id === data.id) {
              return;
            }
            return data;
          });
        }}
        onMouseEnter={() => {
          setIsSubHeaderHovered({ id: data?.id, hovered: true });
        }}
        onMouseLeave={() => {
          setIsSubHeaderHovered({ id: undefined, hovered: false });
        }}
      >
        <data.icon
          width={"18px"}
          height={"18px"}
          style={{ minWidth: "50px", transition: "fill 0.3s" }}
          fill={
            activeSubMenuHeader || isSubHeaderHovered?.id === data.id
              ? "white"
              : chakraUiTheme.colors.darkWhite
          }
        />
        <Text
          color={
            activeSubMenuHeader || isSubHeaderHovered?.id === data.id
              ? "white"
              : "darkWhite"
          }
          minWidth={"170px"}
          transition={"color 0.3s"}
        >
          {t(data.label)}
        </Text>
        <AngleDownIcon
          width={"16px"}
          height={"16px"}
          fill={
            activeSubMenuHeader || isSubHeaderHovered?.id === data.id
              ? "white"
              : chakraUiTheme.colors.darkWhite
          }
          style={{
            minWidth: "16px",
            transform:
              clickedInfo?.id === data.id ? "rotateX(180deg)" : "rotateX(0deg)",
            transition: "transform 0.3s, fill 0.3s",
          }}
        />
      </Flex>
      <Box
        maxHeight={clickedInfo?.id === data.id ? 150 : 0}
        overflow={"hidden"}
        transition={"max-height 0.3s"}
      >
        {data?.subMenu?.map((item) => {
          const isHoveredd = isSubMenuHovered?.id === item.id;
          const activePath = item.path === pathName;

          return (
            <Link
              key={item.id}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "4px 0px 4px 36px",
                color:
                  activePath || isHoveredd
                    ? "white"
                    : chakraUiTheme.colors.darkWhite,
                whiteSpace: "nowrap",
                transition: "color 0.3s",
              }}
              href={item.path}
              onMouseEnter={() =>
                setIsSubMenuHovered({ id: item.id, hovered: true })
              }
              onMouseLeave={() =>
                setIsSubMenuHovered({ id: undefined, hovered: false })
              }
            >
              <Box
                width={"4px"}
                height={"4px"}
                minWidth={"4px"}
                borderRadius={"50%"}
                backgroundColor={
                  activePath || isHoveredd ? "white" : "darkWhite"
                }
                marginRight={"10px"}
                transition={"background-color 0.3s"}
              />
              {t(item.label)}
            </Link>
          );
        })}
      </Box>
    </Flex>
  );
};

export default SubMenu;
