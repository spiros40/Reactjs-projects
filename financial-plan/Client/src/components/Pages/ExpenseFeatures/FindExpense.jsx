import React from "react";
import Button from "../../UI/Button";
import styles from '../ExpenseFeatures/FindExpense.module.css';
import Inputs from "../../UI/Inputs";
import { useNavigate } from "react-router-dom";

const AddExpense=(props)=>{
    const navigate=useNavigate();
    return(
        <form className={styles.form}>
            <div className={styles.div}>
                <label 
                    className={styles.labelTitle}
                    htmlFor="typeOfExpense">
                        Find-Expense </label>  
            </div>
            <Inputs
                name="Find by Name"
                Type="text"
                Placeholder="Enter Expense Name"
                Inputs={styles.inputs}
                Div={styles.div}
                Labels={styles.labels}
            />
                   
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
                    onClick={()=>{
                        navigate(-1);
                    }} 
                />
            </div>
        </form>
    );
}

export default AddExpense;