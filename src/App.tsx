import { useState } from "react";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import "./App.css";

function App() {
  return (
    <ExpandableText maxChars={20}>
      Hello World
    </ExpandableText>
  );
}

export default App;
