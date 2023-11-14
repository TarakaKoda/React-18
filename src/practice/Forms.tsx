import { ChangeEvent, useState } from "react";

interface User {
  name: string;
  password: string;
}

const forms = () => {
  const [user, setUser] = useState<User>({
    name: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    password: "",
  });

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      const newName = event.target.value;
      setError({
        ...error,
        name:
          newName.length === 0
            ? "Required"
            : newName.length < 3
            ? "Name must be at least 3 characters."
            : !isNaN(Number(newName.charAt(0)))
            ? "Name should not start with a number"
            : "",
      });

      return { ...prevUser, name: newName };
    });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prevPassword) => {
      const newPassword = event.target.value;
      setError({
        ...error,
        password:
          newPassword.length < 6
            ? "Password must be at least 6 characters."
            : "",
      });

      return { ...prevPassword, password: newPassword };
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        value={user.name}
        id="name"
        type="text"
        placeholder="Username"
        className="form-control mb-3"
        onChange={handleNameChange}
      />
      {error && <p className="text-danger">{error.name}</p>}
      <input
        value={user.password}
        id="password"
        placeholder="Password"
        type="password"
        className="form-control"
        onChange={handlePasswordChange}
      />
      {error && <p className="text-danger">{error.password}</p>}
      <button className="btn btn-primary mt-3" type="submit">
        Submit
      </button>
    </form>
  );
};

export default forms;
