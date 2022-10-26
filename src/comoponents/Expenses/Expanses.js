import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ِExpansesFilter/ExpensesFilter";
const Expanses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const selectedValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p className="expenses-list__fallback">None Found</p>;
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const noneFiltered = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <div>
      <ExpensesFilter onSelectedValue={selectedValue} />
      <Card>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {filteredYear === "All" && noneFiltered}
      </Card>
    </div>
  );
};

export default Expanses;
