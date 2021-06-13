import products from "../products";
import { DELETE_PRODUCT } from "./actions";
import { Redirect } from "react-router-dom";

const initialState = {
  // initiate all state and its initial value
  products: products,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const productToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      <Redirect to="/products" />;

      return {
        ...state,
        products: productToKeep,
      };

    default:
      return state;
  }
};

export default reducer;
