import { Expenses } from "../../App"

interface Props {
  expenses: Expenses[];
  onSelectCategory: (categories: string) => void;
}


const ExpensesFilter = ({ expenses, onSelectCategory }: Props) => {
  return (
    <select className="form-select mb-3"  onChange={(event) => onSelectCategory(event.target?.value) }>
        <option value='' >Select a category</option>
        <option value="entertainment">Entertainment</option>
        <option value="brands">Brands</option>
        <option value="households">Households</option>
    </select>
  )
}

export default ExpensesFilter