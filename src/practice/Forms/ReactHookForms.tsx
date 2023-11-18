import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema  =z.object({
  name: z.string().min(3, {message: 'Name must be at least 3 characters.'}),
  password: z.string().min(6)
})

type User = z.infer<typeof schema>
const ReactHookForms = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors }, 
  } = useForm<User>({resolver: zodResolver(schema)});


  const handleSubmission = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmission)}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        {...register("name", { required: true, minLength: 3 })}
        id="name"
        type="text"
        className="form-control"
      />
      {errors.name && <p className="text-danger">{errors.name.message}</p>}
      <label htmlFor="password" className="label-form">
        Password
      </label>
      <input
        {...register("password", { required: true, minLength: 6 })}
        id="password"
        type="password"
        className="form-control"
      />
      {errors.password && <p className="text-danger">{errors.password.message}</p>}
      <button className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default ReactHookForms;
