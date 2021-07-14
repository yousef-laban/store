//styling
import { Item, ProductImage } from "../../styles";
import { Link } from "react-router-dom";

const ShopsItem = (props) => {
  return (
    <Item className="card" style={{ width: "18rem" }}>
      <Link to={`/shops/${props.shop.slug}`}>
        <ProductImage
          className="card-img-top"
          src={props.shop.url}
          alt={props.shop.name}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.shop.name}</h5>
      </div>
    </Item>
  );
};

export default ShopsItem;
