import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
const RoutineAppbar = ({ children }) => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: (t) => t.palette.grey[100],
      }}
    >
      <Toolbar>
        {children}
        <IconButton color="default">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default RoutineAppbar;
