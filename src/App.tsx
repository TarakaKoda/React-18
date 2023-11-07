import { useState } from "react";
import ExpenseList from "./Expense-tracker/components/ExpenseList";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Movies", amount: 2000, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={handleSelect} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
