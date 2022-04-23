import React from "react";
import { Box } from "@mui/material";
import O21Big from "../../images/O21-Big.png";

const Hero = () => {
  return (
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
  );
};

export default Hero;
