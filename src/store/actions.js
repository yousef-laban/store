// Action Types
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      productId: productId,
    },
  };
};

export const createProduct = (newProduct) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      newProduct: newProduct,
    },
  };
};

export const updateProduct = (updatedProduct) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      updatedProduct: updatedProduct,
    },
  };
};
