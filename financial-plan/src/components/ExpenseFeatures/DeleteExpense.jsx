import React from "react";
import Button from "../UI/Button";
import ReactDom from "react-dom";
import styles from './DeleteExpense.module.css';

const Backdrop=()=>{
    return(
        <div className={styles.backdrop}/>
    );
}

const DeleteExpense=(props)=>{
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
const Modal=(props)=>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop/>, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<DeleteExpense onClick={props.onClick}/>, document.getElementById("modal-root"))}
        </React.Fragment>    
    );
}

export default Modal;