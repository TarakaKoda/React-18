import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  const handleClick = () => {
    if (ref.current) {
      const newCategory = ref.current.value;
      if (category.includes(newCategory)) {
        setMessage(`${newCategory} already exist`);
      } else {
        if (ref.current.value) {
          setCategory([...category, ref.current.value]);
          setMessage(`New Category has been added ${newCategory}`);
        }
      }
    }
  };

  return (
    <>
      <div className="mb-3">
        <input ref={ref} type="text" className="form-control mb-3" />
        {message && (
          <p
            className={
              message.includes("already") ? "text-danger" : "text-success"
            }>
            {message}
          </p>
        )}
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div className="mb-3">
        <select className="form-select mb-3">
          <option value="">Select category</option>
          {category &&
            category.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

export default App;
