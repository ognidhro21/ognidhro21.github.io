import * as React from "react";
import "../styles/material-colors.css";
import "../styles/index.css";
import Theme from "../styles/theme";
import { Paper, ThemeProvider } from "@mui/material";

import { Footer } from "../components";
import Intro from "../components/IndexPage/Intro";
import Hero from "../components/IndexPage/Hero";
import CTACards from "../components/IndexPage/CTACards";
const IndexPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Paper>
        <Hero />
        <Intro />
        <CTACards />
      </Paper>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
