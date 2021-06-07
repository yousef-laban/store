import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    textColor: "#233e8b", // main font color
    backGroundColor: "#ffffc7", // main background color
    secoundColor: "#2940d3",
    thirdColor: "#a9f1df",
  },

  dark: {
    textColor: "white", // main font color
    backGroundColor: "black", // main background color
    secoundColor: "#2940d3",
    thirdColor: "#a9f1df",
  },
  reverse: {
    textColor: "black", // main font color
    backGroundColor: "white", // main background color
    secoundColor: "#2940d3",
    thirdColor: "#a9f1df",
  },
};

export const GlobalStyle = createGlobalStyle`


body{
background-color: ${(props) => props.theme.backGroundColor};
color:  ${(props) => props.theme.textColor};


}
`;

export const Center = styled.div`
  text-align: center;

  p {
    font-weight: bold;
  }

  h1 {
    font-size: 60px;
    font-family: Brush Script MT;
  }
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 50px;
  border-radius: 4%;
`;

export const ProductsStyle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-bottom: 100px;
`;

export const Item = styled.div`
  text-align: center;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4%;
  }

  p {
    font-weight: bold;
  }
`;

export const ItemDetail = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;

  p {
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    margin-left: 50px;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 300px;
  border: 5px solid;
  border-color: ${(props) => props.theme.thirdColor};
  border-radius: 4%;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const StyledButton = styled.button`
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 12px;
  border: 2px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  font-weight: bold;
  padding: 0px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  margin-bottom:20px;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
