import React , {useState} from "react";
import "./ExpenseItem.css";
import ExpanceDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const expenseTitle=  props.title;
  // let expenseTitle = props.title;
  const expenseAmount = props.amount;

  
  return (
    <li className="expenses-list">
    <Card className="expense-item">
      <ExpanceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">
        {"$"}
        {expenseAmount}
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
