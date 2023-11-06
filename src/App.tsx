import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Button from "./components/Button";
import "./App.css";

function App() {

  const [products, setProducts] = useState(['Product 1', 'Product 2']);

  const handleClick = () => {
    setProducts([...products].filter((product) => product !== 'Product 1'));
  }

  return (
    <div>
      <NavBar productsCount={products.length}/>
      <Cart products={products}/>
      <Button children="Clear" onClick={handleClick} />
    </div>
  );
}

export default App;
