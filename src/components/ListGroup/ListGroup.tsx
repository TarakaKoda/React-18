import { useState } from "react";
// import styles from './ListGroup.module.css' //* CSS modules: Styles is a regular object that we have defined in the ListGroup.module.css file. 
//                                             //* All the css class that we have defined here will have the property in that object. We can use the dot or bracket notation to access the class names from the file.
import styled from "styled-components";


const List = styled.ul`
list-style: none;
padding: 0;
`;

interface ListItemProp {
  active: boolean;
}
const ListItem = styled.li<ListItemProp>`
  padding: 5px 0;
  background: ${ prop => prop.active ? 'blue' : null }
`;


//* Passing Data via Props using the interface (TypeScript)
//* Interface is a TypeScript feature that determine the shape of a object.

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  //* Hook: A Hook is a function that allow us to tap-in to the built-in features in react.
  //* useState(): Using the state hook we can tell to the react the the value or the state of the variable will change in the future.
  //* When we change the state of a component the react will monitor the change and update the DOM.
  let [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
              }}>
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
