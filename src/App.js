//component
import Home from "./components/Home";
import ProductsComp from "./components/ProductsComp";
import DetailItem from "./components/DetailItem";
import NavBar from "./components/NavBar";
import NewProduct from "./components/NewProduct";
import ShopsComp from "./components/shopsComponents/ShopsComp";
import NewShop from "./components/shopsComponents/NewShop";
import DetailShop from "./components/shopsComponents/DetailShop";
import Signup from "./components/usersComponents/Signup";
import Signin from "./components/usersComponents/Signin";

//styleing
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

//
import { useState } from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.products.products);

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

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/shops/:shopSlug/products">
          <NewProduct />
        </Route>

        <Route path="/shops/:itemSlug">
          <DetailShop />
        </Route>

        <Route path="/new-shop">
          <NewShop />
        </Route>

        <Route path="/shops">
          <ShopsComp />;
        </Route>

        <Route path="/products/:productSlug/edit">
          <NewProduct />
        </Route>

        <Route path="/products/:itemSlug">
          <DetailItem />
        </Route>

        <Route path="/products">
          <ProductsComp products={products} />;
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
