import { Box } from "@chakra-ui/react";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box pos="relative" minH="100vh">
      {children}
    </Box>
  );
};

export default Layout;
