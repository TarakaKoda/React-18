import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
// * simplest fetch you can use and still have error handling.
const url = 'https://jsonplaceholder.typicode.com/users'

const GettingUsersDataUsingFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const controller = new AbortController();
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
      })
      .catch((error) => console.warn(error));

    return () => controller.abort();
  }, []);

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default GettingUsersDataUsingFetch;
