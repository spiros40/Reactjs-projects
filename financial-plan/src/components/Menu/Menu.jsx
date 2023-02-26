import MenuCard from "./MenuCard";
import classes from "./Menu.module.css";
import { Outlet, Link } from "react-router-dom";



const Menu=()=>{
   
    return(
        <MenuCard 
            classSelection='menuHorizontal' 
            styleSelection='styleBlack'>
              
            <nav className={classes.list}>
              <ul className={classes.list}>
                <li className={classes.li}>
                  <Link className={classes.link} to="/">Home</Link>
                </li>
                <li className={classes.li}>
                  <Link className={classes.link} to="/AddExpense">Add Expense</Link>
                </li >
                <li className={classes.li}>
                  <Link className={classes.link} to="/FindExpense">View Expense</Link>
                </li>
                <li className={classes.li}>
                  <Link className={classes.link} to="/About">About</Link>
                </li>
                </ul>
            </nav>
            <Outlet />
        </MenuCard>
    );
}

export default Menu;