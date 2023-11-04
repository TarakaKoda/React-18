import { useState } from "react";

//* PASsing Data via Props using the interface (TypeScript)
//* Interface is a Type
interface Props {
  items: string[];
  heading: string;
  OnSelectItem: (item: string) => void;
}

function ListGroup({items, heading, OnSelectItem}: Props) {
  //* Hook: A Hook is a function that allow us to tap-in to the built-in features in react.
  //* useState(): Using the state hook we can tell to the react the the value or the state of the variable will change in the future.
  //* When we change the state of a component the react will monitor the change and update the DOM.
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              OnSelectItem(item);
              }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
