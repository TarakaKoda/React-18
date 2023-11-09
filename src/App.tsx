import { useEffect, useState } from "react";
import "./App.css";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    // * In the useEffect() we can use the promises then and catch instead of await and async. then and catch is more shorter syntax while fetching the data in useEffect hook.
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((rev) => {
        setUsers(rev.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const handleDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(originalUsers.filter((u) => u.id !== user.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Taraka" };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...originalUsers]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = {...user, name: user.name + '!'}
    setUsers(originalUser.map(u => u.id === user.id ? updatedUser : u));
    axios 
      .patch(`https://jsonplaceholder.typicode.com/users/${user.id}`, updatedUser)
      .catch(err => {
        setError(err.message)
        setUsers(originalUser);
      })
  };

  return (
    <>
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}>
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}>
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
