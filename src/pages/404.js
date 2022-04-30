import * as React from "react";
import {
  Typography,
  Container,
  Box,
  ThemeProvider,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "gatsby";
import { Layout } from "../components";
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: "99vh",
          backgroundColor: "var(--red-50)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          OOPS!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "130%",
            position: "relative",
            top: "-48px",
            left: "79px",
            backgroundColor: "var(--red-50)",
            display: "inline-block",
            borderRadius: "16px",
            padding: "0px 8px",
          }}
        >
          Page Not Found
        </Typography>
        <Link to="/">
          <Button variant="contained" color="primary">
            Go Home
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
