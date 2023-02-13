import { useState } from 'react';
import classes from './MenuVertical.module.css';
import MenuCart from './MenuCard';
import ModalWin from '../UI/ModalWin';
import AddExpense from '../ExpenseFeatures/AddExpence';


const MenuVertical=(props)=>{
    const [loginIN, setLoginIN] = useState(false);
    const FindHandler=()=>{
        // window.open('Reactjs-projects/financial-plan/src/components/UI/ModalWin.jsx'); 
    }
    
    return(
        <MenuCart 
            classSelection='menuVertical' 
            styleSelection='stylePurple'>
                <ModalWin page="AddExpense"/>
            <ul className={classes.list}>
                <li onClick={FindHandler}>Find</li>
                <li>Add </li>
                <li>Delete</li>
                <li>Settings</li>
                <li>{loginIN? "Login out":"Login in"}</li>
            </ul>
        </MenuCart>
    );
}


export default MenuVertical;