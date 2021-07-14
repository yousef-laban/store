//styling
import {
  DetaledImage,
  ItemDetail,
  FlexStyleVer,
  ButtonsStyle,
} from "../styles";
import { Link } from "react-router-dom";

//
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteProduct } from "../store/actions/productActions";
import { useDispatch } from "react-redux";

const DetailItem = (props) => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  let itemSlug = useParams().itemSlug;

  if (loading) return <h1>loading</h1>;
  const product = products.find((product) => product.slug === itemSlug);

  if (typeof product === "undefined") return <Redirect to="/products" />;

  return (
    <ItemDetail>
      <DetaledImage class="card-img-top" src={product.url} alt={product.name} />

      <FlexStyleVer
        style={{ textAlign: "left", margin: "0px  50px", width: "45%" }}
      >
        <h1> {product.name}</h1>
        <p> {product.description} </p>
        <p> Price : {product.price} JOD</p>
        <ButtonsStyle>
          <Link to="/products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
              onClick={() => dispatch(deleteProduct(product.id))}
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </Link>

          <Link to={`/products/${product.slug}/edit`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </Link>
        </ButtonsStyle>
      </FlexStyleVer>
    </ItemDetail>
  );
};

export default DetailItem;
