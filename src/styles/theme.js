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
} from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff1744",
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
    borderRadius: 16,
  },
  typography: {
    h1: {
      fontFamily: "EB Garamond",
      fontWeight: "bold",
    },

    h2: {
      fontFamily: "EB Garamond",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "EB Garamond",
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
      fontFamily: "EB Garamond",
    },
    h5: {
      fontWeight: "bold",
      fontFamily: "EB Garamond",
    },
  },
});

export default theme;
