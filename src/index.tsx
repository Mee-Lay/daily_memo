import {
  CssBaseline,
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from "@mui/material";
import "./i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReportHandler } from "web-vitals";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const theme = unstable_createMuiStrictModeTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4a4aac",
      light: "#ffc93d",
      dark: "#b28309",
      contrastText: "#ffffffff",
    },
    secondary: {
      main: "#acac4a",
      light: "#333333",
      dark: "#000000",
      contrastText: "#ffffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // TODO : remove in production
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
