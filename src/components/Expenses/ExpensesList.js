import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    return (
        props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )))
};

export default ExpensesList;