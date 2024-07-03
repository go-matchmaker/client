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
      <Box marginLeft={chakraUiTheme.sizes.sideBarWidth} marginTop={"70px"}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
