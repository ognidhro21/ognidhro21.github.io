import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import NoteImg from "../../images/taking-notes-undraw.png";

const Intro = () => {
  return (
    <Box
      sx={{
        py: 6,
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
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
              the 21<sup>st</sup> batch of Agriculture in Patuakhali Science and
              Technology University. <i>More text will go here.</i>
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Box component="img" src={NoteImg} sx={{ width: "100%" }}></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
