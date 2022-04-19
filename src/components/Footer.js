import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  ThemeProvider,
  Link,
} from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--red-a400)",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          textTransform: "uppercase",
          color: "var(--red-50)",
          py: 3,
          px: 2,
        }}
      >
        <Link href="/" color="#fff">
          Ognidhro 21
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
