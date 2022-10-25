import "./ExpenceDate.css";
import React from "react";
function ExpanceDate(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <div className="expense-date ">
        <div className="expense-date__month">
          {months[props.date.getMonth() - 1]}{" "}
        </div>
        <div className="expense-date__year">{props.date.getFullYear()}</div>
        <div className="expense-date__day">{props.date.getDate()}</div>
      </div>
    </div>
  );
}
export default ExpanceDate;
