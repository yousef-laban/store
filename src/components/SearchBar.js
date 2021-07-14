import React from "react";
// Styling
import { SearchBarStyled } from "../styles";
// import { Link } from "react-router-dom";
import { FlexStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <FlexStyle style={{ margin: "20px" }}>
      <SearchBarStyled
        placeholder="Search for a product name"
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </FlexStyle>
  );
};

export default SearchBar;
