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
  Grid,
  Item,
} from "@mui/material";

import { HomepageCardWide, Footer } from "../components";
import O21Big from "../images/O21-Big.png";
import NoteImg from "../images/taking-notes-undraw.png";
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
            className="hero-logo"
            src={O21Big}
            sx={{
              width: "50%",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            py: 6,
          }}
        >
          <Container>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={4}>
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
                  the 21<sup>st</sup> batch of Agriculture in Patuakhali Science
                  and Technology University. <i>More text will go here.</i>
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Box component="img" src={NoteImg} sx={{ width: "100%" }}></Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            py: 3,
            backgroundColor: "var(--red-50)",
          }}
        >
          <HomepageCardWide
            link="/routines"
            bgcolor="g.main"
            title="Routines"
            subtitle="Check out the routine of the Ognidhro 21!"
          />
          <HomepageCardWide
            link="https://facebook.com/pg/ognidhro21/"
            bgcolor="b.main"
            title="Facebook Page"
            subtitle="Get latest updates from Ognidhro 21!"
          />
        </Box>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
