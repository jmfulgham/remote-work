import { ThemeProvider } from "@mui/material";
import Home from "./components/Home.jsx";
import theme from "./theme.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
