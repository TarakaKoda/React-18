import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Naruto",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spice Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 2 }
    ]
  })

  const handleClickGame = () => {
    setGame({ ...game, player: { ...game.player, name: "Sasuke" } });
  };

  const handleClickPizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Pineapple", "Cheese"] });
  };

  const handleClickCart = () => {
    setCart({...cart, items: [...cart.items].map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
  }

  return (
    <div>
      <p>{game.player.name}</p>
      <Button children="Update" onClick={handleClickGame} />
      <p>Add Toppings</p>
      <p>{pizza.name}</p>
      <ul>
        {pizza.toppings.map((topping) => (
          <li>{topping}</li>
        ))}
      </ul>
      <Button children="Add" onClick={handleClickPizza} />
      <p>Cart</p>
      {cart.items.map(item => <li key={item.id}>Title: {item.title} Number of Products: {item.quantity}</li>)}
      <Button children="Add" onClick={handleClickCart} />
    </div>
  );
}

export default App;
