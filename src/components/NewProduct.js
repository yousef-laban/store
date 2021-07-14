import { FormCenter } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../store/actions/productActions";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewProduct = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products.products);
  const shops = useSelector((state) => state.shops.shops);

  let shopSlug = useParams().shopSlug;

  const findShop = (shopSlug) => shops.find((shop) => shop.slug === shopSlug);

  const shop = findShop(shopSlug);

  const newProduct = {
    name: "",
    url: "",
    price: "",
    description: "",
    shopId: shop.id,
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
      shopId: "",
    });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handelUrl = (event) => {
    setProduct({ ...product, url: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editedProduct
      ? dispatch(updateProduct(product))
      : dispatch(createProduct(product));

    console.log(shop);

    console.log(product);

    resetForm();
    history.push(`/shops/${shop.name}`);
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <h3> {editedProduct ? "Edit Product" : "Add New Product"}</h3>
      <br />
      <div className="form-group">
        <label>Name : </label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter the name of the product"
        />
      </div>

      <div className="form-group">
        <label>Price : </label>
        <input
          className="form-control"
          placeholder="Enter the price"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description :</label>
        <textarea
          className="form-control"
          rows="2"
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <br />

      <div className="form-group">
        <label>Image : </label>
        <input
          className="form-control-file"
          type="file"
          name="url"
          // value={product.url} we remove it becouse type file is read only
          onChange={handelUrl}
        />
      </div>

      <br />
      <button
        type="submit"
        className="btn btn-primary"
        value={editedProduct ? "Update" : "Add"}
      >
        {editedProduct ? "Update" : "Add"}
      </button>
    </FormCenter>
  );
};

export default NewProduct;
