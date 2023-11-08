
import { useEffect, useRef } from "react";
import "./App.css";

// * We know that the react expects us to build the components purely, which means the output must be always same as we pass the same input.
// this is called as a pure function.
// but while calling the backend and changing the DOM elements we don't return any render elements, so we need to move that code in different function called useEffect()
//* The useEffect() will be executed after the rendering of the component. we can use this function to make a call to the backend. 


function App() {

  const ref = useRef<HTMLInputElement>(null);
  // This effect hook is executed after the render of the component.
  // We can use this hook to manipulate the DOM elements or we can call any server for the backend data. 
  // Same as the state and ref hook we can create effect hook right after one and another.
  // Similarly we to call this effect hook at the top most level of the component.
  // We cannot use this in the any of the conditional statement or looping statements.
  useEffect(() => {
    //* Side effect: It is changing the outside component, Technically Modifying the DOM.
    if(ref.current) ref.current.focus(); // This will be executed after the completions of rendering of this component.
  }); 
  
  useEffect(() => {
    document.title = 'My App' // The document title will be changed after rendering of this component.
  })

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
