import React, { useEffect } from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Badge,
  ThemeProvider,
  Box,
} from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
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
          my: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            py: 1,
            px: 2,
            position: "relative",
            zIndex: 1,
            borderRadius: 3,
            position: "relative",
            zIndex: 1,
            bgcolor: `${getClassInfo(code).color}.main`,
          }}
        >
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h6" component="span">
                  {code}
                </Typography>
                {practical && (
                  <Chip
                    label="Practical"
                    color="success"
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
              zIndex: 2,
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
          <Typography
            variant="h1"
            sx={{
              color: "white",
              position: "absolute",
              top: "-50%",
              right: "0%",
              zIndex: -1,
              fontSize: "1000%",
            }}
          >
            {code}
          </Typography>
        </Box>
      </ListItem>
    </>
  );
};

export default Class;
