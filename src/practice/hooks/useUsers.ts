import { useState, useEffect } from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAll<User>();
    request
      .then((result) => {
        setUsers(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { users, setUsers, errors, setError, isLoading };
};

export default useUsers;
