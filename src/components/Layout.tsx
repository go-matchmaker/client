import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { chakraUiTheme } from "@/utils/theme";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Box
        as="main"
        marginLeft={chakraUiTheme.sizes.sidebarWidth}
        marginTop={chakraUiTheme.sizes.topbarHeight}
        backgroundColor={"mainBackgroundColor"}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
