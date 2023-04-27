import React from "react";
import Button from "../UI/Button";
import styles from './FindExpense.module.css';

const AddExpense=(props)=>{
    return(
        <form className={styles.form}>
            <div className={styles.div}>
                <label 
                    className={styles.labelTitle}
                    htmlFor="typeOfExpense">
                        Find-Expense </label>  
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
          
            <div className={styles.div}>
                <label 
                    className={styles.labels}
                    htmlFor="expenseAmount">Find by Type</label>  

                <select 
                    className={styles.options}
                    name="typeOfExpense" 
                    id="expenseAmount"
                    type="text">
                    <option value="">Choose Expense Type...</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
               
            </div>           
         
            <div className={styles.buttons}>
                <Button
                className={styles.buttons1}
                    name="Find..." 
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