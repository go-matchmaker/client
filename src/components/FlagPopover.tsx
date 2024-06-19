import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import EnFlagIcon from "./icons/flags/EnFlagIcon";
import TrFlagIcon from "./icons/flags/TrFlagIcon";
import { useTranslation } from "react-i18next";
import { Language } from "@/utils/enums";
import { chakraUiTheme } from "@/utils/theme";
import OutSideWrapper from "./OutSideWrapper";

const FlagPopover = () => {
  const { i18n } = useTranslation();
  const [isOptionShown, setIsOptionShown] = useState(false);

  return (
    <OutSideWrapper
      handleOutSideClick={() => {
        setIsOptionShown(false);
      }}
    >
      <Box id="flag-container" position={"relative"}>
        {i18n?.language === Language.English ? (
          <EnFlagIcon
            name="en-flag"
            onClick={() => setIsOptionShown((prev) => !prev)}
            cursor={"pointer"}
            width={"30px"}
            height={"30px"}
            style={{ userSelect: "none" }}
          />
        ) : (
          <TrFlagIcon
            name="tr-flag"
            onClick={() => setIsOptionShown((prev) => !prev)}
            cursor={"pointer"}
            width={"30px"}
            height={"30px"}
            style={{ userSelect: "none" }}
          />
        )}
        <Flex
          visibility={isOptionShown ? "visible" : "hidden"}
          opacity={isOptionShown ? 1 : 0}
          position={"absolute"}
          right={0}
          top={"40px"}
          backgroundColor={"white"}
          borderRadius={"4px"}
          flexDirection={"column"}
          boxShadow={chakraUiTheme.shadows.popover}
          gap={"2px"}
          transition={"opacity 0.3s, visibility 0.3s"}
        >
          <Flex
            userSelect={"none"}
            cursor={"pointer"}
            alignItems={"center"}
            gap={"6px"}
            padding={"8px 10px"}
            borderRadius={"4px"}
            _hover={{ backgroundColor: "secondary" }}
            transition={"background-color 0.3s"}
            onClick={() => {
              i18n.changeLanguage(Language.English);
              setIsOptionShown(false);
            }}
          >
            <EnFlagIcon width={"30px"} height={"30px"} /> <Text>English</Text>
          </Flex>
          <Flex
            userSelect={"none"}
            cursor={"pointer"}
            alignItems={"center"}
            gap={"6px"}
            padding={"8px 10px"}
            borderRadius={"4px"}
            _hover={{ backgroundColor: "secondary" }}
            transition={"background-color 0.3s"}
            onClick={() => {
              i18n.changeLanguage(Language.Turkish);
              setIsOptionShown(false);
            }}
          >
            <TrFlagIcon width={"30px"} height={"30px"} /> <Text>Turkish</Text>
          </Flex>
        </Flex>
      </Box>
    </OutSideWrapper>
  );
};

export default FlagPopover;
