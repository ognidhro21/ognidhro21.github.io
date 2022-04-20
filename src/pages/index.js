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
import O21Big from "../images/O21-Big.png";
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
          <Box
            component="img"
            src={O21Big}
            sx={{
              width: "50%",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "var(--red-50)",
            py: 12,
          }}
        >
          <Container>
            <Typography
              variant="h4"
              sx={{
                display: "inline",
              }}
            >
              We are
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "inline",
                ml: 1,
              }}
            >
              the 21<sup>st</sup> batch of Agriculture in Patuakhali Science and
              Technology University. <i>More text will go here.</i>
            </Typography>
          </Container>
        </Box>

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
