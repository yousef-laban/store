//styling
import { ProductsStyle } from "../styles";

//components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

//
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductsComp = (props) => {
  const products = useSelector((state) => state.products);

  const [query, setQuery] = useState("");
  const filteredList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default ProductsComp;
