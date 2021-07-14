//styling
import { ProductsStyle } from "../../styles";

//components
import ShopsItem from "./ShopsItem";
import SearchBar from "../SearchBar";

//
import { useState } from "react";
import { useSelector } from "react-redux";

const ShopsComp = (props) => {
  const shops = useSelector((state) => state.shops.shops);

  const [query, setQuery] = useState("");
  const filteredList = shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopsItem key={shop.id} shop={shop} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default ShopsComp;
