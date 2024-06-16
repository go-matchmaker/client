"use client";

import { queryClient } from "@/utils/api";
import { chakraUiTheme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={chakraUiTheme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
