import * as Icon from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { withTranslation } from "react-i18next";
import i18n from "../i18n";

const Heading = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

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
            flexGrow: 1,
          }}
        >
          {t("daily_memo")}
        </Typography>
        <Icon.Settings
          fontSize="large"
          sx={{ mr: 1 }}
          onClick={() => setOpenDrawer(true)}
        />
      </Toolbar>

      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: "1.5vw",
            letterSpacing: ".1rem",
            textDecoration: "none",
            p: 2,
          }}
        >
          {t("language")}
        </Typography>
        <List disablePadding>
          {[
            { lang: t("japanese"), code: "jp" },
            { lang: t("english"), code: "en" },
          ].map((lang, _) => (
            <ListItem key={lang.lang} disablePadding disableGutters>
              <ListItemButton
                onClick={(_) => {
                  i18n.changeLanguage(lang.code);
                }}
              >
                <ListItemText
                  sx={{
                    color: lang.code === i18n.language ? "red" : "black",
                  }}
                  primary={lang.lang}
                />
                {lang.code === i18n.language && (
                  <ListItemIcon sx={{ ml: 2 }}>
                    <Icon.Check style={{ color: "red" }} />
                  </ListItemIcon>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default withTranslation()(Heading);
