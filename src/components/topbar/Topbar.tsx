import React, { useMemo, useState } from "react";
import { chakraUiTheme } from "@/utils/theme";
import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import FlagPopover from "../FlagPopover";

const Topbar = () => {
  const { t } = useTranslation();
  const pathName = usePathname();
  const [isProfileImageHovered, setIsProfileImageHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState({
    my_information: false,
    my_tasks: false,
    logout: false,
  });

  const activePageName = useMemo(() => {
    const splittedPathName = pathName.substring(1).split("/");
    if (pathName === "/") {
      return t("home");
    } else if (pathName !== "/" && splittedPathName?.length >= 2) {
      return t(splittedPathName?.[1]?.replaceAll("-", "_"));
    } else {
      return t(splittedPathName?.[0]?.replaceAll("-", "_"));
    }
  }, [pathName, t]);

  return (
    <Flex
      position={"fixed"}
      top={0}
      right={0}
      backgroundColor={"white"}
      width={`calc(100dvw - ${chakraUiTheme.sizes.sidebarWidth})`}
      height={"topbarHeight"}
      border={"defaultSolid"}
      zIndex={"topbar"}
    >
      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"0px 16px"}
      >
        <Text fontWeight={"700"} cursor={"default"}>
          {activePageName}
        </Text>

        <Flex alignItems={"center"} gap={"10px"} position={"relative"}>
          <FlagPopover />
          <Box
            width={"50px"}
            height={"50px"}
            backgroundColor={"gray"}
            borderRadius={"10px"}
            onMouseEnter={() => {
              setIsProfileImageHovered(true);
            }}
          />
          <Flex
            position={"absolute"}
            top={"58px"}
            right={0}
            width={"200px"}
            flexDirection={"column"}
            maxHeight={isProfileImageHovered ? "200px" : "0px"}
            backgroundColor={"white"}
            borderRadius={"10px"}
            boxShadow={"popover"}
            overflow={"hidden"}
            transition={"max-height 0.3s"}
            onMouseLeave={() => {
              setIsProfileImageHovered(false);
            }}
          >
            <Flex
              alignItems={"center"}
              width={"100%"}
              gap={"16px"}
              padding={"10px"}
            >
              <Box
                width={"50px"}
                height={"50px"}
                backgroundColor={"gray"}
                borderRadius={"10px"}
              />
              <Flex flexDirection={"column"}>
                <Text fontWeight={"500"} fontSize={"14px"} height={"16px"}>
                  Bulut Gocer
                </Text>
                <Text fontSize={"13px"} height={"16px"} color={"muteText"}>
                  bulut@gmail.com
                </Text>
              </Flex>
            </Flex>
            <Box
              width={"90%"}
              height={"2px"}
              backgroundColor={"darkWhite"}
              borderRadius={"50%"}
              marginLeft={"auto"}
              marginRight={"auto"}
            />
            <Flex flexDirection={"column"} fontSize={"14px"} padding={"10px"}>
              <Link
                href={"/my-information"}
                style={{
                  width: "100%",
                  padding: "2px 4px",
                  backgroundColor: isLinkHovered.my_information
                    ? chakraUiTheme.colors.secondary
                    : "transparent",
                  borderRadius: "4px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => {
                  setIsLinkHovered((prev) => ({
                    ...prev,
                    my_information: true,
                  }));
                }}
                onMouseLeave={() => {
                  setIsLinkHovered((prev) => ({
                    ...prev,
                    my_information: false,
                  }));
                }}
              >
                My Information
              </Link>
              <Link
                href={"/my-tasks"}
                style={{
                  width: "100%",
                  padding: "2px 4px",
                  borderRadius: "4px",
                  backgroundColor: isLinkHovered.my_tasks
                    ? chakraUiTheme.colors.secondary
                    : "transparent",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => {
                  setIsLinkHovered((prev) => ({
                    ...prev,
                    my_tasks: true,
                  }));
                }}
                onMouseLeave={() => {
                  setIsLinkHovered((prev) => ({
                    ...prev,
                    my_tasks: false,
                  }));
                }}
              >
                My Tasks
              </Link>
            </Flex>
            <Box
              width={"90%"}
              height={"2px"}
              backgroundColor={"darkWhite"}
              borderRadius={"50%"}
              marginLeft={"auto"}
              marginRight={"auto"}
            />
            <Flex fontSize={"14px"} padding={"10px"}>
              <Link
                href={"/login"}
                style={{
                  width: "100%",
                  padding: "2px 4px",
                  borderRadius: "4px",
                  backgroundColor: isLinkHovered.logout
                    ? chakraUiTheme.colors.secondary
                    : "transparent",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => {
                  setIsLinkHovered((prev) => ({
                    ...prev,
                    logout: true,
                  }));
                }}
                onMouseLeave={() => {
                  setIsLinkHovered((prev) => ({
                    ...prev,
                    logout: false,
                  }));
                }}
              >
                Logout
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Topbar;
