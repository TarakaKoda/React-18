import userService, { User } from "../services/userService";
import useUsers from "../hooks/useUsers";

const FetchingDataUsingAxios = () => {
  const { users, setUsers, errors, setError, isLoading } = useUsers();

  const handleDeleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  const handleAddUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Taraka" };
    setUsers([newUser, ...users]);

    userService
      .add<User>(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const handleUpdateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update<User>(updatedUser).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
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
            key={user.id}
            className="list-group-item d-flex justify-content-between">
            {user.name}
            <div className="d-flex gap-3">
              <button
                className=" btn btn-outline-secondary"
                onClick={() => handleUpdateUser(user)}>
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDeleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchingDataUsingAxios;
