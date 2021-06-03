//component
import Home from "./components/Home";
import ProductsComp from "./components/ProductsComp";
//styleing
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductsComp />
    </ThemeProvider>
  );
}

export default App;
