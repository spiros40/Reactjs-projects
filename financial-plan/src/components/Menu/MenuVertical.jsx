import styles from './MenuVertical.module.css';
import MenuCart from './MenuCard';
import { useState } from 'react';
import { Link } from "react-router-dom";



const MenuVertical=(props)=>{
    const [loginIN, setLoginIn]=useState(false);

    return(
        <MenuCart 
            classSelection='menuVertical' 
            styleSelection='styleBlack'>
          
            <nav className={styles.list}>
                <li>
                  <Link className={styles.li} to="/FindExpense">Find</Link>
                </li>
                <li>
                  <Link className={styles.li} to="/AddExpense">Add</Link>
                </li>
                <li>
                  <Link className={styles.li} to="/Delete">Delete</Link>
                </li>
                <li>
                  <Link className={styles.li} to="/Settings">Settings</Link>
                </li>
                <li>                  
                  <Link className={styles.li} to="/Login">{loginIN? "Login out":"Login in"}</Link>
                </li>
            </nav>
            
        </MenuCart>
    );
}


export default MenuVertical;