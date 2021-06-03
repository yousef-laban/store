//styling
import { ProductsStyle } from "../styles";

//data
import products from "../products";
import ProductItem from "./ProductItem";

const ProductsComp = () => {
  let productsList = products.map((product) => (
    <ProductItem key={product.id} item={product} />
  ));

  return <ProductsStyle> {productsList} </ProductsStyle>;
};

export default ProductsComp;
