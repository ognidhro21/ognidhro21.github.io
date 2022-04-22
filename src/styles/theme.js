import {
  green,
  blue,
  cyan,
  lime,
  yellow,
  purple,
  deepPurple,
  orange,
  deepOrange,
  lightGreen,
  indigo,
  brown,
  blueGrey,
  red,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat/variable.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff1744",
      light: red[100],
      background: red[50],
    },
    text: {
      primary: "#263238",
    },
    g: {
      main: green[500],
    },
    b: {
      main: blue[500],
    },
    c: {
      main: cyan[500],
    },
    l: {
      main: lime[500],
    },
    y: {
      main: yellow[500],
    },
    p: {
      main: purple[500],
    },
    dp: {
      main: deepPurple[500],
    },
    o: {
      main: orange[500],
    },
    do: {
      main: deepOrange[500],
    },
    lg: {
      main: lightGreen[500],
    },
    i: {
      main: indigo[500],
    },
    br: {
      main: brown[500],
    },
    blg: {
      main: blueGrey[500],
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: "MontserratVariable",
      fontWeight: "900",
      textTransform: "uppercase",
    },

    h2: {
      fontFamily: "MontserratVariable",
      fontWeight: "900",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "MontserratVariable",
      fontWeight: "800",
      textTransform: "uppercase",
    },
    h4: {
      fontWeight: "800",
      fontFamily: "MontserratVariable",
      textTransform: "uppercase",
    },
    h5: {
      fontWeight: "800",
      fontFamily: "MontserratVariable",
      textTransform: "uppercase",
    },
  },
});

export default theme;
