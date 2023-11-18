import { FormEvent, useRef, useState } from "react";

interface Person {
  name: string;
  password: string;
}

const FormRef = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [formError, setFormError] = useState(false);

  const initialState: Person = {
    name: "",
    password: "",
  };

  const [person, setPerson] = useState(initialState);

  const handleSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameRef.current) {
      setFormError(person.name.length < 0 || person.name.length < 3);
      setPerson({ ...person, name: nameRef.current.value });
    }

    if (formError) return;
  };

  return (
    <form onSubmit={handleSubmission}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input ref={nameRef} id="name" type="text" className="form-control" />
      {formError && (
        <p className="text-danger">Name must be at least 3 characters</p>
      )}
      <label htmlFor="password" className="form-label mt-3">
        Password
      </label>
      <input
        ref={passwordRef}
        id="password"
        type="password"
        className="form-control"
      />
      <button className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default FormRef;
