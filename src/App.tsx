import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import { produce } from "immer";
import "./App.css";

function App() {
  //* Updating objects.
  // const [drink, setDrink] = useState({
  //   title: 'Americano',
  //   price: 5
  // })

  // const handleClick = () => {
  //   const newDrink = {
  //     ...drink,
  //     price: 6
  //   }

  //   setDrink(newDrink)
  // }

  //* Updating complex objects.
  // const  [person, setPerson] = useState({
  //   name: 'tarka',
  //   age: 22,
  //   address: {
  //     city: 'vizag',
  //     state: 'ap',
  //     zipCode: '530041'
  //   }
  // })

  // const handleClick = () => {

  //   const newPerson = {
  //     ...person,
  //     address: {...person.address, zipCode: '530045'}
  //   };

  //   setPerson(newPerson);

  // }

  //* Updating Array.
  // const [tags, setTags] = useState(["Happy", "sad"]);

  // const handleClick = () => {
    // Adding an element into an array: 
  //   //* we can use the spread operator for adding the element into an array.
  //   //! we cannot use the .push() to add the elements.

    // const newTags = [...tags, "mixed"]; //* or we can use write this in the setFunction without saving the values in a different variable.
    // setTags([...tags, 'mixed']);

    // removing the element from an array: 
  //   //* we can use the filter operator to remove any element from an array.

    // const newTagsR = [...tags].filter((tag) => tag !== 'Happy'); //* Similarly we can do the sam thing here to reduce the code, we can write this same logic inside the function.

    // setTags([...tags].filter((tag) => tag !== 'Happy'));

    // Update an element in an array:
  //   //* we can use the map method to update any element from an array.
    // const newTagsU = [...tags].map((tag) => tag === 'sad' ? 'Sadness' : tag); //* refactor this code so that we can use this logic inside set function.

    // setTags([...tags].map((tag) => tag === 'Happy' ? 'Happiness' : tag));

  // };
  
  //* Updating an array of objects.
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false}
  ])

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }))
  }

  return (
    <div>
      {bugs.map(bug => <p key={bug.id}>{bug.title} { bug.fixed ? 'Fixed' : 'New' }</p>)}
      <Button children="Submit" onClick={handleClick} />
    </div>
  );
}

export default App;
