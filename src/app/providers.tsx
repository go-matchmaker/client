"use client";

import { chakraUiTheme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={chakraUiTheme}>{children}</ChakraProvider>;
}
