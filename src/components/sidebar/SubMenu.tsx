import { chakraUiTheme } from "@/utils/theme";
import { SideMenu } from "@/utils/types";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  data: SideMenu;
  isOpen: boolean;
}
const SubMenu: FC<Props> = ({ data, isOpen }) => {
  const { t } = useTranslation();
  const [isSubMenuHovered, setIsSubMenuHovered] = useState<{
    id: number | undefined;
    hovered: boolean;
  }>();

  return (
    <Flex
      flexDirection={"column"}
      maxHeight={isOpen ? "150px" : 0}
      overflow={"hidden"}
      backgroundColor={"darkPrimary"}
      transition={"max-height 0.3s"}
    >
      {data?.subMenu?.map((item) => {
        const isHoveredd = isSubMenuHovered?.id === item.id;
        return (
          <Link
            key={item.id}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: "4px 14px",
              marginLeft: "22px",
              color: isHoveredd ? "white" : chakraUiTheme.colors.darkWhite,
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
              backgroundColor={isHoveredd ? "white" : "darkWhite"}
              marginRight={"10px"}
              transition={"background-color 0.3s"}
            />
            {t(item.label)}
          </Link>
        );
      })}
    </Flex>
  );
};

export default SubMenu;
