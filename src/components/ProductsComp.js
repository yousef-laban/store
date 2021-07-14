//styling
import { ProductsStyle, Center } from "../styles";

//components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

//
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductsComp = (props) => {
  const products = props.products;
  const user = useSelector((state) => state.user.user);

  const [query, setQuery] = useState("");
  const filteredList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <>
      {user ? (
        <div>
          <SearchBar setQuery={setQuery} />
          <ProductsStyle>{filteredList} </ProductsStyle>;
        </div>
      ) : (
        <Center>
          <h1>Please Sign In </h1>
        </Center>
      )}
    </>
  );
};

export default ProductsComp;
