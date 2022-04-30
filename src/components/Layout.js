import React from "react";
import "../styles/globals.css";
import Theme from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import "../styles/material-colors.css";

function Layout({ children }) {
  return (
    <ThemeProvider theme={Theme}>
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
