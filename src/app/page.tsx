"use client";
import { Box, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <Box>
        {t("welcome")}
        <Button
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
          }}
        >
          bas
        </Button>
      </Box>
    </Layout>
  );
}
