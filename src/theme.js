import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  display: "flex",
  flexDirection: "column",

  cssVariables: true,
  palette: {
    primary: {
      main: "#EBEBEB",
    },
    secondary: {
      main: "#A24FFC",
    },

    background: {
      default: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: '"Questrial", "Work Sans", sans-serif',
    useNextVariants: true,
  },

  a: {
    color: "#A24FFC",
  },
});
export default theme;
