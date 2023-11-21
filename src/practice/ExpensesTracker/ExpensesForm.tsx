import { Expenses } from "../ExpensesTracker"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = ["entertainment", "brands", "households"] as const

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name field must contain at lest 3 characters." })
    .max(50),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(1),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmitForm: (expense: Expenses) => void;
}

const ExpensesForm = ({ onSubmitForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="mb-3"
      onSubmit={handleSubmit((data) => onSubmitForm(data as Expenses))}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        {...register("name")}
        id="name"
        type="text"
        className="form-control"
      />
      {errors.name && <p className="text-danger">{errors.name?.message}</p>}
      <label htmlFor="amount" className="form-label">
        Amount
      </label>
      <input
        {...register("amount", { valueAsNumber: true })}
        id="amount"
        type="number"
        className="form-control"
      />
      {errors.amount && <p className="text-danger">{errors.amount?.message}</p>}
      <div>
        <label htmlFor="category"></label>
        <select
          {...register("category")}
          id="category"
          className="form-select mt-3">
          <option value="">Select a category</option>
          <option value="entertainment">Entertainment</option>
          <option value="brands">Brands</option>
          <option value="households">Households</option>
        </select>
      </div>
      {errors.category && (
        <p className="text-danger">{errors.category?.message}</p>
      )}
      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
};

export default ExpensesForm;
