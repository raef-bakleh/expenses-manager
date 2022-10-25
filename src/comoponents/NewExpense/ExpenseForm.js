import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChange = (title) => {
    setEnteredTitle(title.target.value);
  };
  const amountChange = (amount) => {
    setEnteredAmount(amount.target.value);
  };
  const dateChange = (date) => {
    setEnteredDate(date.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData);
    
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredTitle} type="text" onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChange}
            type="number"
            step="0.01"
            min="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChange}
            type="date"
            min="2018-01-01"
            max="2024-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onHide}>Abbrechen</button>
        <button type="submit"> Add New Expense </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
