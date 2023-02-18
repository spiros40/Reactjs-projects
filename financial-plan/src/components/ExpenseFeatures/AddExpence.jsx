import React from "react";
import Button from "../UI/Button";
import styles from './AddExpense.module.css';
import ReactDom from "react-dom";
import FindExpense from '../ExpenseFeatures/FindExpense';
import DeleteExpense from '../ExpenseFeatures/DeleteExpense';

const Backdrop=()=>{
    return(
        <div className={styles.backdrop}/>
    );
}
const AddExpense=()=>{

    return(
        <form className={styles.form}>
            <div className={styles.div}>
                <label 
                    className={styles.labelTitle}
                    htmlFor="typeOfExpense">
                        Add-Expense </label>  
            </div>
            <div className={styles.div}>
                <label 
                    className={styles.labels}
                    htmlFor="expenseName">Expense Name</label>  
                <input
                    className={styles.inputs}
                    id="expenseName"
                    type="text"
                       placeholder="Enter Expense Name"
                    required/>   
            </div>
            <div className={styles.div}>
                <label 
                    className={styles.labels}
                    htmlFor="expenseDescription">Expense Description</label>  
                <textarea
                    className={styles.textarea}
                    id="expenseDescription"
                    type="text"
                    cols="40" 
                    rows="5"
                    placeholder="Enter Expense Description"
                    required/>    
            </div>
            <div className={styles.div}>
                <label 
                    className={styles.labels}
                    htmlFor="expenseAmount">Amount</label>  
                <input 
                    className={styles.inputs}
                    id="expenseAmount"
                    name="expenseAmount"
                    type="number"
                    placeholder="Enter Expense Amount"
                    maxLength="10"
                    required/>    
            </div>
            
            {/* <select name="typeOfExpense" >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select> */}
            <div className={styles.buttons}>
                <Button
                className={styles.buttons1}
                    name="Add expence" 
                    ButtonStyle="withBackgroundButton" 
                    type="button" 
                />
                <Button
                className={styles.buttons1}
                    name="Return" 
                    ButtonStyle="withBackgroundButton" 
                    type="button" 
                />
            </div>
        </form>
    );
}


const Modal=(props)=>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop/>, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<AddExpense onClick={props.onClick}/>, document.getElementById("modal-root"))}
        </React.Fragment>    
    );
}

export default Modal;