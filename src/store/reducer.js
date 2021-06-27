import {} from "module";
import { DELETE_PRODUCT } from "./actions";
import { CREATE_PRODUCT } from "./actions";
import { UPDATE_PRODUCT } from "./actions";
import { FETCH_PRODUCTS } from "./actions";

const initialState = {
  // initiate all state and its initial value
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const productToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );

      return {
        ...state,
        products: productToKeep,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      console.log(updatedProduct);
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
