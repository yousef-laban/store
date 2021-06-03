import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const theme = {
  textColor: "#233e8b", // main font color
  backGroundColor: "#ffffc7", // main background color
  secoundColor: "#2940d3",
  thirdColor: "#a9f1df",
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

export const ProductImage = styled.img`
  width: 200px;
  height: 300px;
  border: 5px solid;
  border-color: ${(props) => props.theme.thirdColor};
  border-radius: 4%;
`;
