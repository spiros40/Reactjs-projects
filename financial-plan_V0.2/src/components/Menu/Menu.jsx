import MenuCard from "./MenuCard";
import classes from "./Menu.module.css";
import { Outlet, Link } from "react-router-dom";



const Menu=()=>{
   
    return(
        <MenuCard 
            classSelection='menuHorizontal' 
            styleSelection='stylePurple'>
    
            <nav className={classes.list}>
                <li>
                  <Link className={classes.li} to="/">Home</Link>
                </li>
                <li>
                  <Link className={classes.li} to="/AddExpense">Add Expense</Link>
                </li>
                <li>
                  <Link className={classes.li} to="/FindExpense">View Expense</Link>
                </li>
                <li>
                  <Link className={classes.li} to="/About">About</Link>
                </li>
            </nav>
            <Outlet />
        </MenuCard>
    );
}

export default Menu;