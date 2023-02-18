import React from "react";
import Button from "../UI/Button";
import styles from './DeleteExpense.module.css';

const AddExpense=(props)=>{
    return(
        <form className={styles.form}>
            <div className={styles.div}>
                <label 
                    className={styles.labelTitle}
                    htmlFor="typeOfExpense">
                        Delete-Expense </label>  
            </div>
            <div className={styles.div}>
                <label 
                    className={styles.labels}
                    htmlFor="expenseName">Find by Name</label>  
                <input
                    className={styles.inputs}
                    id="expenseName"
                    type="text"
                       placeholder="Enter Expense Name"
                    required/>   
            </div>         
         
            <div className={styles.buttons}>
                <Button
                className={styles.buttons1}
                    name="Delete" 
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

export default AddExpense;