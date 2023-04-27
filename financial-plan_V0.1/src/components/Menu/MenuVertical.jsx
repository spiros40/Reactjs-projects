import { useState } from 'react';
import classes from './MenuVertical.module.css';
import MenuCart from './MenuCard';
import ModalWin from '../UI/ModalWin';
import AddExpense from '../ExpenseFeatures/AddExpence';
import DeleteExpense from '../ExpenseFeatures/DeleteExpense';
import FindExpense from '../ExpenseFeatures/FindExpense';
import Expense from '../Pages/Expense/Expense';


const MenuVertical=(props)=>{
    const [loginIN, setLoginIN] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [findModal, setFindModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [settingsModal, setSettingsModal] = useState(false);

    const FindHandler=()=>{
        // window.open('Reactjs-projects/financial-plan/src/components/UI/ModalWin.jsx'); 
        setFindModal(true);
    }
    const AddHandler=()=>{
        // window.open('Reactjs-projects/financial-plan/src/components/UI/ModalWin.jsx'); 
        setAddModal(true);
    }
    const DeleteHandler=()=>{
        // window.open('Reactjs-projects/financial-plan/src/components/UI/ModalWin.jsx'); 
        setDeleteModal(true);
    }
    const SettingsHandler=()=>{
        // window.open('Reactjs-projects/financial-plan/src/components/UI/ModalWin.jsx'); 
        setSettingsModal(true);
    }
    const closeCartHandler=()=>{
        setAddModal(false);
        setFindModal(true);
        console.log("++++++++++");

    }

    return(
        <MenuCart 
            classSelection='menuVertical' 
            styleSelection='stylePurple'>
                {/* <ModalWin page="AddExpense"/> */}
                {addModal && <ModalWin page="AddExpense" onClick={closeCartHandler}/>}
                {findModal && <ModalWin page="FindExpense"/>}
                {deleteModal && <ModalWin page="DeleteExpense"/>}
                {settingsModal ? <ModalWin page=""/>:"Login in"}
            <ul className={classes.list}>
                <li onClick={FindHandler}>Find</li>
                <li onClick={AddHandler}>Add </li>
                <li onClick={DeleteHandler}>Delete</li>
                <li onClick={SettingsHandler}>Settings</li>
                <li>{loginIN? "Login out":"Login in"}</li>
            </ul>
        </MenuCart>
    );
}


export default MenuVertical;