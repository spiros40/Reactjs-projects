import React from "react";
import ReactDom from "react-dom";
import styles from './ModalWin.module.css';
import AddExpense from "../AddNewExpense/AddExpence";

const Backdrop=()=>{
    return(
        <div className={styles.backdrop}/>
    );
}

const ModalWin=(props)=>{
    return(
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                {props.children} <AddExpense/>
            </div>
        </div>
    )
}
const Modal=(props)=>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop/>, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<ModalWin onClick={props.onClick}/>, document.getElementById("modal-root"))}
        </React.Fragment>    
    );
}

export default Modal;