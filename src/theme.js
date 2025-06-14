import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    cssVariables: true,
    width: "100%",
    palette: {
        primary: {
            main: "#EBEBEB"
        },
        secondary: {
            main: "#A24FFC"
        },

        background: {
            default: "#FFFFFF"
        }
    },

    typography: {
        fontFamily: '"Questrial", "Work Sans", sans-serif',
        useNextVariants: true,
    },

    a: {
        color: "#A24FFC"
    }

});
export default theme;
