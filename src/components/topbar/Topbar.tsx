import React from "react";
import { chakraUiTheme } from "@/utils/theme";
import { Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const { t } = useTranslation();
  const pathName = usePathname();

  return (
    <Flex
      position={"fixed"}
      top={0}
      right={0}
      width={`calc(100dvw - ${chakraUiTheme.sizes.sidebarWidth})`}
      height={"topbarHeight"}
      border={"defaultSolid"}
      zIndex={"topbar"}
    >
      <Text>{pathName === "/" ? t("home") : t(pathName?.substring(1))}</Text>
    </Flex>
  );
};

export default Topbar;
