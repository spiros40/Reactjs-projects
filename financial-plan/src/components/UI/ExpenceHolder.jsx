import classes from './ExpenceHolder.module.css';



const ExpenseHolder=(props)=>{
    const EditExpense=()=>{
        console.log("button");
    }

    return(
        <div className={classes.Cart}>
            <p className={classes.Title}>{props.ExpenseTitle}</p>
            <p className={classes.Text}>{props.ExpenseText}</p>
            <p className={classes.Amount}>Amount: {props.ExpenseAmount}</p>
            <button className={classes.button} onClick={EditExpense}>Edit</button>
        </div>
    );
}

export default ExpenseHolder;