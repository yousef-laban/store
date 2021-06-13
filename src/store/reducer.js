import products from "../products";
import {} from "module";
import { DELETE_PRODUCT } from "./actions";
import { CREATE_PRODUCT } from "./actions";
import { UPDATE_PRODUCT } from "./actions";

import slugify from "slugify";

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

      return {
        ...state,
        products: productToKeep,
      };

    case CREATE_PRODUCT:
      action.payload.newProduct.id =
        state.products[state.products.length - 1].id + 1;
      action.payload.newProduct.slug = slugify(action.payload.newProduct.name);
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };

    case UPDATE_PRODUCT:
      action.payload.updatedProduct.slug = slugify(
        action.payload.updatedProduct.name
      );

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.updatedProduct.id
            ? action.payload.updatedProduct
            : product
        ),
      };

    default:
      return state;
  }
};

export default reducer;
