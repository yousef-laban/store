// import { Link } from "react-router-dom";
import { NavB, Logo, LinkItem } from "../styles";

const NavBar = (props) => {
  return (
    <NavB class="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/">
        <img
          src="https://www.pngkit.com/png/full/123-1237333_black-bow-tie-logo.png"
          alt="logo"
        ></img>
      </Logo>
      <div>
        <LinkItem to="/products">products</LinkItem>
        <button onClick={props.sw}> switch</button>
      </div>
    </NavB>
  );
};

export default NavBar;
