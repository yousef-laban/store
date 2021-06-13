//styling
import { ProductImage, ItemDetail, StyledButton, ButtonLink } from "../styles";
import { MdDeleteForever } from "react-icons/md";
//
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteProduct } from "../store/actions";
import { useDispatch } from "react-redux";

const DetailItem = (props) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  let itemSlug = useParams().itemSlug;

  const product = products.find((product) => product.slug === itemSlug);

  if (typeof product === "undefined") return <Redirect to="/products" />;

  return (
    <ItemDetail>
      <div>
        <ProductImage src={product.url} alt={product.name} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description} </p>
        <br />
        <p>{product.price} JOD</p>

        <ButtonLink to="/products">
          <StyledButton>&#8592;</StyledButton>
        </ButtonLink>

        <StyledButton onClick={() => dispatch(deleteProduct(product.id))}>
          <MdDeleteForever />
        </StyledButton>

        <ButtonLink to={`/products/${product.slug}/edit`}>
          <StyledButton>Edit Proudct</StyledButton>
        </ButtonLink>
      </div>
    </ItemDetail>
  );
};

export default DetailItem;
