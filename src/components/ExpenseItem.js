import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    /* const expenseDate = new Date(2021, 6, 26);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = '100.2' */ 
    return (<div className="expense-item" >
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description" >
            <h2> {props.title} </h2>
            <div className="expense-item__price" > ${props.amount} </div>
        </div>
    </div>);
}

export default ExpenseItem;