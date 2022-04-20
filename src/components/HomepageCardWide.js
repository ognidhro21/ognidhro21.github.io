import React from "react";
import {
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Box,
} from "@mui/material";
const HomepageCardWide = ({ link, bgcolor, title, subtitle }) => {
  return (
    <Paper>
      <Card
        sx={{
          width: "100%",
          mb: 2,
        }}
      >
        <CardActionArea
          href={link}
          sx={{
            backgroundColor: bgcolor,
          }}
        >
          <Container>
            <CardContent>
              <Box sx={{ py: 2, width: "100%" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {subtitle}
                </Typography>
              </Box>
            </CardContent>
          </Container>
        </CardActionArea>
      </Card>
    </Paper>
  );
};

export default HomepageCardWide;
