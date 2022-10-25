import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ِExpansesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
const Expanses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const selectedValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };


  let expensesContent = <p className="expenses-list__fallback">None Found</p>
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <ExpensesChart  expenses={filteredExpenses}/>
      <ExpensesFilter selected={filteredYear} onSelectedValue={selectedValue} />
      {filteredExpenses.length === 0 && expensesContent}
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      <Card className="expenses"></Card>
    </div>
  );
};

export default Expanses;
