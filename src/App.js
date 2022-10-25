import { useState } from "react";
import Expanses from "./comoponents/Expenses/Expanses";
import ExpenseForm from "./comoponents/NewExpense/ExpenseForm";
import NewExpense from "./comoponents/NewExpense/NewExpense";
import ExpensesFilter from "./comoponents/ِExpansesFilter/ExpensesFilter";
function App() {
  const [expenses,setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    console.log(expenses)
  }
  return (
    <div>
      <h2>Let's get started Wohoo!</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expanses items={expenses} />
    </div>
  );
}

export default App;
