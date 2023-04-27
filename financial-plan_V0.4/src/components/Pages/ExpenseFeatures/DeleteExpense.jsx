import React from "react";
import Button from "../../UI/Button";
import ReactDom from "react-dom";
import styles from './DeleteExpense.module.css';
import Inputs from "../../UI/Inputs";
import { useNavigate } from "react-router-dom";

const Backdrop=()=>{
    return(
        <div className={styles.backdrop}/>
    );
}

const DeleteExpense=(props)=>{

    const navigate=useNavigate();
    return(
        <form className={styles.form}>
            <div className={styles.div}>
                <label 
                    className={styles.labelTitle}
                    htmlFor="typeOfExpense">
                        Delete-Expense </label>  
            </div>
                <Inputs
                    name="Find by Name"
                    Type="text"
                    Placeholder="Enter Expense Name"
                    Inputs={styles.inputs}
                    Div={styles.div}
                    Labels={styles.labels}
                />
                     
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
            {ReactDom.createPortal(<DeleteExpense onClick={props.onClick}/>, document.getElementById("modal-root"))}
        </React.Fragment>    
    );
}

export default Modal;