// import { useState } from "react";
// import "./App.css";
// import ExpensesList from "./practice/ExpensesTracker/ExpensesList";
// import ExpensesFilter from "./practice/ExpensesTracker/ExpensesFilter";
// import ExpensesForm from "./practice/ExpensesTracker/ExpensesForm";

export interface Expenses {
  name: string;
  amount: number;
  category: string;
}

// function App() {
//   const [expenses, setExpenses] = useState<Expenses[]>([
//     { name: "movie", amount: 500, category: "entertainment" },
//     { name: "cloths", amount: 400, category: "brands" },
//     { name: "veggies", amount: 200, category: "households" },
//   ]);

//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleDelete = (item: Expenses) => {
//     setExpenses(expenses.filter((i) => i.name !== item.name));
//   };

//   const handleSelect = (categories: string) => {
//     console.log(categories);
//     setSelectedCategory(categories);
//   };

//   const handleForm = (expense: Expenses) => {
//     setExpenses([expense, ...expenses]);
//   };

//   const visibleList = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <>
//       <ExpensesForm onSubmitForm={handleForm} />
//       <ExpensesFilter expenses={expenses} onSelectCategory={handleSelect} />
//       <ExpensesList
//         expenses={visibleList}
//         onDelete={handleDelete}></ExpensesList>
//     </>
//   );
// }

// export default App;
