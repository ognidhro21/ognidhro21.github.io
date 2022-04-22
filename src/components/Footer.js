import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "gatsby";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--red-100)",
        width: "100%",
        borderTop: "4px solid var(--red-a400)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          py: 3,
          px: 2,
          fontWeight: "bold",
        }}
      >
        <Link to="/">Home</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
