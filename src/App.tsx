import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let [isAlertVisible, setAlertVisibility] = useState(false);
  const handleClose = () => setAlertVisibility(false)
  const handleClick = () => setAlertVisibility(true);

  return (
    <div>
      {isAlertVisible && <Alert onClose={handleClose}>Button Clicked</Alert>}
      <Button onClick={handleClick}>Submit</Button>
    </div>
  );
}

export default App;
