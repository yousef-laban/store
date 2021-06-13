import React from "react";
// Styling
import { SearchBarStyled } from "../styles";
import { Link } from "react-router-dom";
import { FlexStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <FlexStyle>
      <SearchBarStyled
        placeholder="Search for a product name"
        onChange={(event) => props.setQuery(event.target.value)}
      />
      <Link to="/new-product">
        <button>Add New Product</button>
      </Link>
    </FlexStyle>
  );
};

export default SearchBar;
