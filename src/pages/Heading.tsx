import * as Icon from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";

const Heading = () => {
  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{
        backgroundColor: "#4a4aac",
        color: "white",
      }}
    >
      <Toolbar>
        <Icon.EditNote fontSize="large" sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          DAILY MEMO
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withTranslation()(Heading);
