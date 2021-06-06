//component
import Home from "./components/Home";
import ProductsComp from "./components/ProductsComp";
import DetailItem from "./components/DetailItem";
//styleing
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
//
import { useState } from "react";
// import products from "./products";

function App() {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState(null);

  const sw = () => {
    setCounter(counter + 1);
  };
  const y = () => {
    if (counter % 3 === 0) return "light";
    if (counter % 3 === 1) return "dark";
    if (counter % 3 === 2) return "reverse";
  };

  const setView = () => {
    if (product) return <DetailItem item={product} setProduct={setProduct} />;
    else return <ProductsComp setProduct={setProduct} />;
  };
  return (
    <ThemeProvider theme={theme[y()]}>
      <GlobalStyle />
      <button onClick={sw}> switch</button>
      <Home />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
