"use client";
import React, { useCallback } from "react";
import EasyTravelIcon from "@/components/logos/EasyTravelIcon";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import FormikInput from "@/components/formik-elements/FormikInput";
import { useTranslation } from "react-i18next";
import FlagPopover from "@/components/FlagPopover";

const Login = () => {
  const { t } = useTranslation();
  // const test = useBreakpointValue({
  //   xs: "0em", // 0px
  //   sm: "30em", // 480px
  //   md: "48em", // 768px
  //   lg: "62em", // 992px
  //   xl: "80em", // 1280px
  //   xxl: "96em", // 1536px
  // });

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
      backgroundColor={"#f2f2f2"}
      flexDirection={["column", "column", "row"]}
    >
      <Box position={"fixed"} top={4} right={4}>
        <FlagPopover />
      </Box>
      <Flex
        width={"60%"}
        height={"100dvh"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={10}
      >
        <EasyTravelIcon width={"100%"} height={100} />
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={30}>{t("welcome")}</Text>
          <Text fontSize={16} color={"muteText"}>
            {t("login_sub_text")}
          </Text>
        </Flex>
      </Flex>
      <Flex
        width={"40%"}
        height={"100dvh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          width={"80%"}
          height={"80%"}
          backgroundColor={"white"}
          borderRadius={"30px"}
          padding={"30px 50px"}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"40px"}
            marginBottom={"80px"}
          >
            <Text fontWeight={500} fontSize={"24px"} userSelect={"none"}>
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
              <Flex flexDirection={"column"} gap={"24px"}>
                <FormikInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("email")}
                />
                <FormikInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("password")}
                />
                <Text
                  width={"max-content"}
                  marginLeft={"auto"}
                  userSelect={"none"}
                  cursor={"pointer"}
                  _hover={{ color: "secondary" }}
                  transition={"color 0.3s"}
                >
                  {t("forgot_password")}
                </Text>
                <Button
                  type="submit"
                  backgroundColor={"primary"}
                  color={"white"}
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
