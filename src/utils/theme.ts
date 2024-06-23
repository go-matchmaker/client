import { extendTheme } from "@chakra-ui/react";

export const chakraUiTheme = extendTheme({
  fonts: {
    body: `'Outfit', sans-serif`,
  },
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    xxl: "96em", // 1536px
  },
  colors: {
    muteText: "#6b6b6b",
    primary: "#0e3e5b",
    secondary: "#f89913",
    login: "#f2f2f2",
  },
  shadows: {
    popover: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  },
  zIndexLevels: {
    veryHigh: 100,
    high: 80,
    medium: 60,
    low: 40,
    veryLow: 20,
  },
});
