//styling
import { Center, Image } from "../styles";
//data
import pic from "../pics/pic.jpg";

const Home = () => {
  return (
    <Center>
      <h1>Clothing Shop</h1>
      <p>Quality is remembered long after price is forgotten</p>
      <Image src={pic} alt="logo" />
    </Center>
  );
};

export default Home;
