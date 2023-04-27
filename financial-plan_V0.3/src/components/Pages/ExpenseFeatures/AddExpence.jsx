import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../../UI/Button";
import styles from '../ExpenseFeatures/AddExpense.module.css';
import ReactDom from "react-dom";
import Inputs from "../../UI/Inputs";

const Backdrop=()=>{
    return(
        <div className={styles.backdrop}/>
    );
}
const AddExpense=(props)=>{

    const navigate=useNavigate();

    return(
        <form className={styles.form}>
            <div className={styles.div}>
                <label 
                    className={styles.labelTitle}
                    htmlFor="typeOfExpense">
                        Add-Expense </label>  
            </div>
            <Inputs
                name="Expense Name"
                Type="text"
                Placeholder="Enter Expense Name"
                Inputs={styles.inputs}
                Div={styles.div}
                Labels={styles.labels}
            />
           
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
            <Inputs
                name="Amount"
                Type="number"
                Placeholder="Enter Expense Amount"
                Inputs={styles.inputs}
                Div={styles.div}
                Labels={styles.labels}
            />    
            
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
                    onClick={()=>{
                        navigate(-1);
                    }}
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