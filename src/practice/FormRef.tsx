import { FormEvent, useRef } from "react";

interface Person {
  name: string;
  password: string;
}

const FormRef = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const person: Person = {
    name: "",
    password: "",
  };

  const handleSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameRef.current) person.name = nameRef.current.value;

    if (passwordRef.current) person.password = passwordRef.current.value;

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmission}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input ref={nameRef} id="name" type="text" className="form-control" />
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
