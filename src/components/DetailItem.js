//styling
import { ProductImage, ItemDetail, StyledButton } from "../styles";
import { MdDeleteForever } from "react-icons/md";

//data
// import products from "../products";

const DetailItem = (props) => {
  const deleteAndReturn = () => {
    props.setProduct(null);
    props.deleteProduct(props.item.id);
  };

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

        <StyledButton onClick={() => props.setProduct(null)}>
          &#8592;
        </StyledButton>

        <StyledButton onClick={deleteAndReturn}>
          <MdDeleteForever />
        </StyledButton>
      </div>
    </ItemDetail>
  );
};

export default DetailItem;
