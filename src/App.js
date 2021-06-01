/* eslint-disable jsx-a11y/alt-text */

//styling
import "./App.css";
//data
import pic from "./pics/pic.jpg";
import products from "./products";

function App() {
  let productsList = products.map((product) => (
    <div className="product">
      <img className="product-image" src={product.url} alt={product.name} />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} JOD</p>
    </div>
  ));

  return (
    <div className="center">
      <h1>Clothing Shop</h1>
      <p>Quality is remembered long after price is forgotten</p>
      <img className="center-image" src={pic} alt="logo" />
      <div className="products">{productsList}</div>
    </div>
  );
}

export default App;
