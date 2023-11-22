import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
// * simplest fetch you can use and still have error handling.
const url = "https://jsonplaceholder.typicode.com/users";

const GettingUsersDataUsingFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetch(url, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("unable to fetch user data.");
        console.log(response);
        return response.json();
      })
      .then((userData) => {
        setUsers(userData);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError")
          return;
        setErrors(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const handleDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    const request = new Request(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: "DELETE",
      }
    );

    fetch(request)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Unable to delete the user. Status: ${response.status}`
          );
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          setErrors("Network error. Unable to reach the server.");
          setUsers(originalUsers);
        } else setErrors(error.message);
        setUsers(originalUsers);
      });
  };

  const handleAddUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "taraka" };

    setUsers([newUser, ...users]);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Unable to add user! Status: ${response.status}`);
        return response.json();
      })
      .then((newUserData) => {
        setUsers([newUserData, ...users]);
      })
      .catch((error) => {
        if (error instanceof TypeError)
          setErrors("Network error. Unable to reach the server.");
        else {
          setErrors(error.message);
          setUsers(originalUsers);
        }
      });
  };

  const handleUpdate = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { id: user.id, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    fetch(`${url}/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Unable to Update ${user.name} to ${updatedUser.name}. Status: ${response.status}`
          );
        return response.json();
      })
      .then((updatedUserData) => {
        setUsers(users.map((u) => (u.id === user.id ? updatedUserData : u)));
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          setErrors("Network error. Unable to reach the server.");
          setUsers(originalUsers);
        } else {
          setErrors(error.message);
          setUsers(originalUsers);
        }
      });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {errors && <p className="text-danger">{errors}</p>}
      <button className="btn btn-primary mb-3" onClick={handleAddUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}>
            {user.name}
            <div className="button-wrapper d-flex gap-2">
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleUpdate(user)}>
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
};

export default GettingUsersDataUsingFetch;
