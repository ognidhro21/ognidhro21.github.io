import * as React from "react";
import "../styles/material-colors.css";
import "../styles/index.css";
import Theme from "../styles/theme";
import {
  Typography,
  Container,
  Box,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  ThemeProvider,
} from "@mui/material";
import { HomepageCardWide, Footer } from "../components";
const IndexPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Paper>
        <Box
          className="hero"
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            backgroundColor: "var(--red-a400)",
            width: "100%",
            minHeight: "80vh",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              textTransform: "uppercase",
              color: "var(--red-50)",
            }}
          >
            Ognidhro 21 Logo
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: "256px",
            backgroundColor: "var(--red-50)",
          }}
        ></Box>

        <HomepageCardWide
          link="/routines"
          bgcolor="var(--green-200)"
          title="Routines"
          subtitle="Check out the routine of the Ognidhro 21!"
        />
        <HomepageCardWide
          link="https://facebook.com/pg/ognidhro21/"
          bgcolor="var(--red-200)"
          title="Facebook Page"
          subtitle="Get latest updates from Ognidhro 21!"
        />
      </Paper>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
