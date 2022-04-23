import React, { useEffect } from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Badge,
  ThemeProvider,
  Box,
  Stack,
} from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import Classes from "../data/classes";
const Class = ({ code, start, end, practical }) => {
  function getClassInfo(code) {
    const classInfo = Classes.find((c) => c.code === code);
    return classInfo;
  }

  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        px: 0,
        backgroundColor: "primary.background",
        mb: 2,
        borderLeft: "4px solid",
        borderLeftColor: `${getClassInfo(code).color}`,
        backgroundColor: "background.paper",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          px: 2,
          zIndex: 1,
          position: "relative",
        }}
      >
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  bgcolor: "background.paper",
                }}
              >
                {code}
              </Typography>
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
              <Box>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  color="text.primary"
                >
                  {`${start} - ${end}`}
                  {" |  "}
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
              </Box>
            </React.Fragment>
          }
        />
        <Typography
          variant="h1"
          sx={{
            color: `${getClassInfo(code).color}`,
            position: "absolute",
            top: "-80%",
            right: "0%",
            zIndex: -1,
            fontSize: "1000%",
            opacity: 0.1,
          }}
        >
          {code}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default Class;
