import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup/";
import Like from './components/Like'
import "./App.css";

function App() {
  // let [isAlertVisible, setAlertVisibility] = useState(false);
  // const handleClose = () => setAlertVisibility(false);
  // const handleClick = () => setAlertVisibility(true);
  // const handleListClick = (item: string) => console.log(item);
  // const items = ["Naruto", "Sasuke", "Kakashi", "Sakura", "Zoro"];

  return (
    <div>
      {/* {isAlertVisible && <Alert onClose={handleClose}>Button Clicked</Alert>}
      <Button onClick={handleClick}>Submit</Button>
      <ListGroup
        items={items}
        heading={"Anime Characters"}
        onSelectItem={handleListClick}></ListGroup> */}
      <Like onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;
