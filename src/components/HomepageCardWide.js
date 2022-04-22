import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Container,
  Box,
  Button,
} from "@mui/material";
import { Link } from "gatsby";
const HomepageCardWide = ({ link, bgcolor, title, subtitle }) => {
  return (
    <Container>
      <Card
        sx={{
          width: "100%",
          mb: 2,
          boxShadow: "none",
          backgroundColor: `${bgcolor}`,
          borderRadius: 3,
        }}
        elevation="0"
      >
        <CardContent>
          <Box sx={{ py: 2, width: "100%", zIndex: 1, position: "relative" }}>
            <Box
              sx={{
                zIndex: 2,
              }}
            >
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography gutterBottom variant="body1" color="text.secondary">
                {subtitle}
              </Typography>
              <Link to={link}>
                <Button variant="contained">GO!</Button>
              </Link>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "1200%",
                position: "absolute",
                top: "-20%",
                right: "0%",
                display: "inline",
                zIndex: -1,
                color: "background.paper",
              }}
            >
              {title}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HomepageCardWide;
