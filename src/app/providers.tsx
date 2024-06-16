"use client";

import { queryClient } from "@/utils/api";
import { chakraUiTheme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={chakraUiTheme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}
