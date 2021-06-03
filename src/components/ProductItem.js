//styling
import { ProductImage, Item } from "../styles";
//data
// import products from "../products";

const ProductItem = (props) => {
  return (
    <Item>
      <ProductImage src={props.item.url} alt={props.item.name} />
      <p>{props.item.name}</p>
      <p>{props.item.price} JOD</p>
    </Item>
  );
};

export default ProductItem;
