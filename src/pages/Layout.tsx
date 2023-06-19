import { Box } from "@mui/material";
import { withTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Heading from "./Heading";

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Heading></Heading>
      <Outlet />
    </Box>
  );
};

export default withTranslation()(Layout);
