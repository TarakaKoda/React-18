import { useState } from "react";
import { Expenses } from "../../App";

interface Props {
  expenses: Expenses[];
  onDelete: (item: Expenses) => void;
}

const ExpensesList = ({ expenses, onDelete }: Props) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => onDelete(item)}
                  className="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>$ {expenses.reduce((accumulator, expense) => expense.amount + accumulator, 0)}</td>
          </tr>
        </tfoot>
      </table>
      {expenses.length === 0 && (
        <p className="text-danger mt-3">No items left.</p>
      )}
    </>
  );
};

export default ExpensesList;
