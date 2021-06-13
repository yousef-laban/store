//component
import Home from "./components/Home";
import ProductsComp from "./components/ProductsComp";
import DetailItem from "./components/DetailItem";
import NavBar from "./components/NavBar";
import NewProduct from "./components/NewProduct";
//styleing
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

//
import { useState } from "react";
import { Route, Switch } from "react-router";

function App() {
  const [counter, setCounter] = useState(0);

  const sw = () => {
    setCounter(counter + 1);
  };

  const y = () => {
    if (counter % 3 === 0) return "light";
    if (counter % 3 === 1) return "dark";
    if (counter % 3 === 2) return "reverse";
  };

  return (
    <ThemeProvider theme={theme[y()]}>
      <GlobalStyle />
      <NavBar sw={sw} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productSlug/edit">
          <NewProduct />
        </Route>

        <Route path="/products/:itemSlug">
          <DetailItem />
        </Route>

        <Route path="/new-product">
          <NewProduct />
        </Route>

        <Route path="/products">
          <ProductsComp />;
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
