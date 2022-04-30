import * as React from "react";
import "../styles/material-colors.css";
import { Paper } from "@mui/material";
import Intro from "../components/IndexPage/Intro";
import Hero from "../components/IndexPage/Hero";
import CTACards from "../components/IndexPage/CTACards";
import { Layout } from "../components";
const IndexPage = () => {
  return (
    <Layout>
      <Paper>
        <Hero />
        <Intro />
        <CTACards />
      </Paper>
    </Layout>
  );
};

export default IndexPage;
