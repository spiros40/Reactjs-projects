import React from "react";
import ReactDom from "react-dom";
import styles from './ModalWin.module.css';
import AddExpense from "../ExpenseFeatures/AddExpence";
import FindExpense from '../ExpenseFeatures/FindExpense';
import DeleteExpense from '../ExpenseFeatures/DeleteExpense';

var modalSelected="";

const Backdrop=(props)=>{
    return(
        <div className={styles.backdrop}/>
    );
}

const ModalWin=(props)=>{
    return(
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                {props.children} 
                {(modalSelected==="AddExpense")&& <AddExpense/>}
                {(modalSelected==="FindExpense")&& <FindExpense/>}
                {(modalSelected==="DeleteExpense")&& <DeleteExpense/>}
            </div>
        </div>
    )
}
const Modal=(props)=>{
    modalSelected=props.page;
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop/>, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<ModalWin onClick={props.onClick}/>, document.getElementById("modal-root"))}
        </React.Fragment>    
    );
}

export default Modal;