//styling
import { Item, ProductImage } from "../styles";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <Item className="card" style={{ width: "18rem" }}>
      <Link to={`/products/${props.product.slug}`}>
        <ProductImage
          className="card-img-top"
          src={props.product.url}
          alt={props.product.name}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.price} JOD</p>
      </div>
    </Item>
  );
};

export default ProductItem;
