import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showResults, setShowResults] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const showHide = () => {
    setShowResults(true);
    setShowButton(true);
    return <button>fasdf</button>;
  };
  const saveExpenseData = (enteredData) => {
    const expenseData = {
      id: Math.random() * 10000,
      ...enteredData,
    };
    props.onAddExpense(expenseData);
    setIsVisible(false);
  };

  const hideForm = () => {
    setShowResults(false);
    setShowButton(false);
    console.log("here am i");
  };
  return (
    <div className="new-expense">
      {!showButton && <button onClick={showHide}> Add New Expense </button>}

      {!showButton && showResults === false ? null : (
        <ExpenseForm onSaveExpenseData={saveExpenseData} onHide={hideForm} />
      )}
    </div>
  );
};

export default NewExpense;
