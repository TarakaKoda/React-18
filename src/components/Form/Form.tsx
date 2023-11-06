
import { ChangeEvent, FormEvent, useState } from 'react'

const Form = () => {

  const [person, setPerson] = useState({
    name: '',
    age: ''
  })

  const handlePersonName = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson({...person, name: event.target.value})
  }

  const handlePersonAge = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson({...person, age: event.target.value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input value={person.name} id="name" type="text" className="form-control" onChange={handlePersonName}/>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input value={person.age} id="age" type="number" className="form-control" onChange={handlePersonAge}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
