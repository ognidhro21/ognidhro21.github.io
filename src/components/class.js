import React, { useEffect } from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Chip,
  Badge,
} from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import CircleIcon from "@mui/icons-material/Circle";

import Classes from "../data/classes";
const Class = ({ code, start, end, practical }) => {
  function getClassInfo(code) {
    const classInfo = Classes.find((c) => c.code === code);
    return classInfo;
  }

  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          px: 0,
          py: 1,
          // backgroundColor: getClassInfo(code).color,
          my: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        <ListItemText
          primary={
            <React.Fragment>
              <Badge
                variant="dot"
                color={getClassInfo(code).color}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Typography variant="h6" component="span">
                  {code}
                </Typography>
              </Badge>
              {practical && (
                <Chip
                  label="Practical"
                  color="primary"
                  size="small"
                  icon={<ScienceIcon />}
                  sx={{
                    ml: 2,
                    mb: 1,
                  }}
                />
              )}
            </React.Fragment>
          }
          sx={{
            textTransform: "uppercase",
            p: 0,
          }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body1"
                color="text.primary"
              >
                {`${start} - ${end}`}
                {" | "}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  display: "inline",
                }}
              >
                {getClassInfo(code).name}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
};

export default Class;
