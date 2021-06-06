//styling
import { ProductImage, Item } from "../styles";
//data
// import products from "../products";

//onClick={() => console.log(props.item)}

const ProductItem = (props) => {
  return (
    <Item onClick={() => props.setProduct(props.item)}>
      <ProductImage src={props.item.url} alt={props.item.name} />
      <p>{props.item.name}</p>
      <p>{props.item.price} JOD</p>
    </Item>
  );
};

export default ProductItem;
