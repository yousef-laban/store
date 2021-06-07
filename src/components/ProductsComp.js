//styling
import { ProductsStyle } from "../styles";

//data
// import products from "../products";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

//
import { useState } from "react";

const ProductsComp = (props) => {
  const [query, setQuery] = useState("");

  const filteredList = props._products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        setProduct={props.setProduct}
        key={product.id}
        item={product}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default ProductsComp;
