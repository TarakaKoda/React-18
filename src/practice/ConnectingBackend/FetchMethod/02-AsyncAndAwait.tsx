import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
}

const FetchingDataUsingFetchAsyncAndAwait = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok)
          throw new Error(`HTTP Error! Status: ${response.status}`);
        console.log(response);
        const data = await response.json();
        if (!controller.signal.aborted) setUsers(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError")
          return;

        setErrors(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
        setIsLoading(false);
      }
    };

    getData();
    return () => controller.abort();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="spinner-border">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {errors && <p className="text-danger">{errors}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchingDataUsingFetchAsyncAndAwait;
