import React from "react";
import {
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
const HomepageCardWide = ({ link, bgcolor, title, subtitle }) => {
  return (
    <Paper elevation={3}>
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
          <CardContent
            sx={{
              p: 5,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
};

export default HomepageCardWide;
