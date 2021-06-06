//styling
import { ProductImage, ItemDetail, StyledButton } from "../styles";
//data
// import products from "../products";

const DetailItem = (props) => {
  return (
    <ItemDetail>
      <div>
        <ProductImage src={props.item.url} alt={props.item.name} />
      </div>
      <div>
        <h1>{props.item.name}</h1>
        <p>{props.item.description} </p>
        <br />
        <p>{props.item.price} JOD</p>
        <br />
        <br />
        <StyledButton onClick={() => props.setProduct(null)}>
          &#8592;
        </StyledButton>
      </div>
    </ItemDetail>
  );
};

export default DetailItem;
