import {ThemeProvider} from "@mui/material";
import Home from "./components/Home.jsx";
import theme from '../theme.js'

const App =()=> {
    const parser = new window.RSSParser()
    return (
        <ThemeProvider theme={theme}>
       <Home />
        </ThemeProvider>
    );
}

export default App
