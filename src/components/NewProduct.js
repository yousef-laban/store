import { FlexStyleVer } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewProduct = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);

  const newProduct = {
    name: "",
    url: "",
    price: "",
    description: "",
  };

  const editedProduct = products.find(
    (product) => product.slug === productSlug
  );

  const [product, setProduct] = useState(
    editedProduct ? editedProduct : newProduct
  );

  const resetForm = () => {
    setProduct({
      name: "",
      slug: "",
      id: "",
      url: "",
      price: "",
      description: "",
    });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editedProduct
      ? dispatch(updateProduct(product))
      : dispatch(createProduct(product));

    resetForm();
    history.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FlexStyleVer>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="url"
            value={product.url}
            onChange={handleChange}
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>

        <label>
          Description :
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </FlexStyleVer>
    </form>
  );
};

export default NewProduct;
