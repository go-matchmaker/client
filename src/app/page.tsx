"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
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
  );
}
