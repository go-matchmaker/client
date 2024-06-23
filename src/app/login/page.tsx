"use client";
import React, { useCallback, useState } from "react";
import EasyTravelIcon from "@/components/logos/EasyTravelIcon";
import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormikInput from "@/components/formik-elements/FormikInput";
import { useTranslation } from "react-i18next";
import FlagPopover from "@/components/FlagPopover";
import EmailIcon from "@/components/icons/EmailIcon";
import { chakraUiTheme } from "@/utils/theme";
import LockIcon from "@/components/icons/LockIcon";

const Login = () => {
  const [isInputFocusted, setIsInputFocussed] = useState({
    email: false,
    password: false,
  });
  const { t } = useTranslation();
  const logoWidth = useBreakpointValue({
    base: "200px",
    sm: "250px",
    md: "300px",
    lg: "350px",
    xl: "100%",
    xxl: "100%",
  });

  const onSubmit = useCallback(
    (values: { email: string; password: string }) => {
      console.log(values);
    },
    []
  );

  return (
    <Flex
      width={"100dvw"}
      height={"100dvh"}
      backgroundColor={"login"}
      flexDirection={["column", "column", "column", "row"]}
      overflowX={"hidden"}
      overflowY={"auto"}
    >
      <Box position={"fixed"} top={4} right={4}>
        <FlagPopover />
      </Box>
      <Flex
        width={{ base: "100%", lg: "50%", xl: "60%" }}
        minHeight={"250px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={[2, 2, 2, 10]}
      >
        <EasyTravelIcon width={logoWidth} height={100} />
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={{ base: "24px", md: "30px" }}>{t("welcome")}</Text>
          <Text fontSize={{ base: "12px", md: "16px" }} color={"muteText"}>
            {t("login_sub_text")}
          </Text>
        </Flex>
      </Flex>
      <Flex
        width={{ base: "100%", lg: "50%", xl: "40%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          width={"80%"}
          minHeight={"300px"}
          backgroundColor={"white"}
          borderRadius={"30px"}
          padding={{ base: "16px 26px", sm: "20px 32px", md: "30px 50px" }}
          marginBottom={{ base: "20px", md: "0px" }}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ base: "16px", sm: "24px", md: "40px" }}
            marginBottom={{ base: "20px", sm: "40px", md: "80px" }}
          >
            <Text
              fontWeight={500}
              fontSize={{ base: "20px", sm: "22px", md: "24px" }}
              userSelect={"none"}
            >
              {t("login")}
            </Text>
            <Box
              width={"100%"}
              height={"3px"}
              backgroundColor={"primary"}
              borderRadius={"50%"}
            />
          </Flex>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={onSubmit}
          >
            <Form>
              <Flex
                flexDirection={"column"}
                gap={{ base: "16px", sm: "20px", md: "24px" }}
              >
                <FormikInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("email")}
                  onFocus={() =>
                    setIsInputFocussed((prev) => ({ ...prev, email: true }))
                  }
                  onBlur={() =>
                    setIsInputFocussed((prev) => ({ ...prev, email: false }))
                  }
                  leftIcon={
                    <EmailIcon
                      width={"22px"}
                      height={"22px"}
                      fill={
                        isInputFocusted?.email
                          ? chakraUiTheme.colors.secondary
                          : chakraUiTheme.colors.primary
                      }
                      style={{ transition: "fill 0.3s" }}
                    />
                  }
                />
                <FormikInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("password")}
                  onFocus={() =>
                    setIsInputFocussed((prev) => ({ ...prev, password: true }))
                  }
                  onBlur={() =>
                    setIsInputFocussed((prev) => ({ ...prev, password: false }))
                  }
                  leftIcon={
                    <LockIcon
                      width={"22px"}
                      height={"22px"}
                      fill={
                        isInputFocusted?.password
                          ? chakraUiTheme.colors.secondary
                          : chakraUiTheme.colors.primary
                      }
                      style={{ transition: "fill 0.3s" }}
                    />
                  }
                />
                <Text
                  width={"max-content"}
                  marginLeft={"auto"}
                  userSelect={"none"}
                  cursor={"pointer"}
                  fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                  _hover={{ color: "secondary" }}
                  transition={"color 0.3s"}
                >
                  {t("forgot_password")}
                </Text>
                <Button
                  type="submit"
                  backgroundColor={"primary"}
                  color={"white"}
                  fontSize={{ base: "14px", md: "16px" }}
                  height={{ base: "30px", md: "34px" }}
                  _hover={{ backgroundColor: "secondary" }}
                  transition={"background-color 0.3s"}
                >
                  {t("login")}
                </Button>
              </Flex>
            </Form>
          </Formik>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
