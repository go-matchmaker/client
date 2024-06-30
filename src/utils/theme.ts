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
    darkWhite: "#cecece",
    muteText: "#6b6b6b",
    primary: "#0e3e5b",
    darkPrimary: "#1e1e2d",
    secondary: "#f89913",
    login: "#f2f2f2",
  },
  shadows: {
    popover: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  },
  borders: {
    defaultSolid: "1px solid #6b6b6b",
    defaultDotted: "1px dotted #6b6b6b",
  },
  sizes: {
    topbarHeight: "70px",
    sidebarWidth: "50px",
    sidebarOpenWidth: "250px",
  },
  zIndices: {
    topbar: 50,
    sidebar: 60,
  },
});
