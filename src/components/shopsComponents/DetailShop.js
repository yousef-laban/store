//styling
import {
  DetaledImage,
  ItemDetail,
  FlexStyleVer,
  ButtonsStyle,
} from "../../styles";
import { Link } from "react-router-dom";

//
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsComp from "../ProductsComp";
// import { deleteProduct } from "../store/actions/productActions";
// import { useDispatch } from "react-redux";

const DetailShop = (props) => {
  const shops = useSelector((state) => state.shops.shops);
  const products = useSelector((state) => state.products.products);

  const loading = useSelector((state) => state.loading);

  //   const dispatch = useDispatch();

  let itemSlug = useParams().itemSlug;

  if (loading) return <h1>loading</h1>;
  const shop = shops.find((shop) => shop.slug === itemSlug);

  if (typeof shop === "undefined") return <Redirect to="/shops" />;

  const getBookById = (productid) =>
    products.find((product) => product.id === productid);
  let relatedProducts = shop.products.map((product) => getBookById(product.id));

  return (
    <FlexStyleVer>
      <ItemDetail>
        <DetaledImage class="card-img-top" src={shop.url} alt={shop.name} />

        <FlexStyleVer
          style={{ textAlign: "left", margin: "0px  50px", width: "45%" }}
        >
          <h1> {shop.name}</h1>

          <Link to={`/shops/${shop.slug}/products`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="black"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
              style={{ margin: "10px" }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </Link>

          <ButtonsStyle>
            <Link to="/shops">
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
            {/* <Link>
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
          </Link> */}

            <Link to={`/shops/${shop.slug}/edit`}>
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
      <ProductsComp products={relatedProducts} />
    </FlexStyleVer>
  );
};

export default DetailShop;
