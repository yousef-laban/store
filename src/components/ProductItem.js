//styling
import { ProductImage, Item } from "../styles";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <Item>
      <Link to={`/products/${props.product.slug}`}>
        <ProductImage src={props.product.url} alt={props.product.name} />
      </Link>
      <p>{props.product.name}</p>
      <p>{props.product.price} JOD</p>
    </Item>
  );
};

export default ProductItem;
