import { useState, useEffect } from "react";
import { CanceledError } from '../services/api-client'
import userService, { User } from "../services/user-service";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = userService.getAll<User>();
      request
        .then((rev) => {
          setUsers(rev.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
  
      return () => cancel();
    }, []);
    
    return {users, setUsers, error, setError, isLoading, setIsLoading}
}

export default useUsers;