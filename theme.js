import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: "#EBEBEB"
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: "#A24FFC"
            // dark: will be calculated from palette.secondary.main,
        },

        background: {
            default: "#FFFFFF"
        }
        // error: will use the default color
    },

    typography: {
        fontFamily: '"Questrial", "Work Sans", sans-serif',
        useNextVariants: true,
    }
});
export default theme;
