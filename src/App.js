import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Counter from "./components/Counter";
import Users from "./components/Users";
import ActionsLikeRedux from "./components/ActionsLikeRedux";
import Immer from "./components/Immer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Counter />
        <Users />
        <ActionsLikeRedux />
        <Immer />
      </ThemeProvider>
    </>
  );
}

export default App;
