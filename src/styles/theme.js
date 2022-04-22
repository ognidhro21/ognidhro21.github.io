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
    },
    text: {
      primary: "#263238",
    },
    g: {
      main: green[100],
    },
    b: {
      main: blue[100],
    },
    c: {
      main: cyan[100],
    },
    l: {
      main: lime[100],
    },
    y: {
      main: yellow[100],
    },
    p: {
      main: purple[100],
    },
    dp: {
      main: deepPurple[100],
    },
    o: {
      main: orange[100],
    },
    do: {
      main: deepOrange[100],
    },
    lg: {
      main: lightGreen[100],
    },
    i: {
      main: indigo[100],
    },
    br: {
      main: brown[100],
    },
    blg: {
      main: blueGrey[100],
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
