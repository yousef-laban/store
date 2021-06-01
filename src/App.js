/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import pic from "./pics/pic.jpg";

function App() {
  return (
    <dic>
      <h1 className="center">Clothing Shop</h1>
      <p className="center">
        Quality is remembered long after price is forgotten
      </p>
      <img className="centerImage" src={pic} alt="logo" />
    </dic>
  );
}

export default App;
