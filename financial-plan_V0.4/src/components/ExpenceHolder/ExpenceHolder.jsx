
import classes from './ExpenceHolder.module.css';

const ExpenseHolder=(props)=>{
    const EditExpense=()=>{
        console.log("button");
    }

    return(
        <div className={`${classes.Cart} ${classes[props.styleSelection]}`}>
            <div className={classes.Title}>{props.ExpenseTitle}</div>
            <div className={classes.Text}>{props.ExpenseText}</div>
            <div className={classes.Amount}>Amount: {props.ExpenseAmount} {props.ExpenceCurrency}</div>
            <button className={`${classes.button} ${classes[props.styleButton]}`} onClick={EditExpense}>Edit</button>
        </div>       
    );
}

export default ExpenseHolder;