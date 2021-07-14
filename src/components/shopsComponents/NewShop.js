import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createShop } from "../../store/actions/shopsActions";
import { useHistory } from "react-router-dom";
// import {  useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

const NewProduct = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  //   let shopSlug = useParams().shopSlug;
  //   const shops = useSelector((state) => state.shops);

  const newShop = {
    name: "",
    url: "",
    price: "",
    description: "",
  };

  //   const editedProduct = products.find(
  //     (product) => product.slug === productSlug
  //   );
  let editedshop = false;

  const [shop, setShop] = useState(editedshop ? editedshop : newShop);

  const resetForm = () => {
    setShop({
      name: "",
      slug: "",
      id: "",
      url: "",
      price: "",
      description: "",
    });
  };

  const handleChange = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value });
  };

  const handelUrl = (event) => {
    setShop({ ...shop, url: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // editedshop
    //   ? dispatch(updateProduct(product))
    //   : dispatch(createShop(shop));

    dispatch(createShop(shop));
    resetForm();
    history.push("/shops");
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <h3> {editedshop ? "Edit shop" : "Add New Shop"}</h3>
      <br />
      <div className="form-group">
        <label>Name : </label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={shop.name}
          onChange={handleChange}
          placeholder="Enter the name of the product"
        />
      </div>

      <div className="form-group">
        <label>Image : </label>
        <input
          className="form-control-file"
          type="file"
          name="url"
          // value={shop.url} we remove it becouse type file is read only
          onChange={handelUrl}
        />
      </div>

      <br />
      <button
        type="submit"
        className="btn btn-primary"
        value={editedshop ? "Update" : "Add"}
      >
        {editedshop ? "Update" : "Add"}
      </button>
    </FormCenter>
  );
};

export default NewProduct;
