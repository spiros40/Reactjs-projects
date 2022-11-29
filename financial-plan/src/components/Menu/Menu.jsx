import MenuCard from "./MenuCard";
import classes from "./Menu.module.css";
import { ApiLinks } from "../../Data/ApiLinks";

const Menu=()=>{
    const goToHome=()=>{
        console.log("");
    }
    const openAddExpense=()=>{

    }
    const searchExpense=()=>{

    }
    const openAbout=()=>{
        
    }
    return(
        <MenuCard 
            classSelection='menuHorizontal' 
            styleSelection='stylePurple'>
                
            <ul className={classes.list}>
                <li onClick={goToHome}>Home</li>
                <li onClick={openAddExpense}>Add Expense</li>
                <li onClick={searchExpense}>View Expense</li>
                <li onClick={openAbout}>About</li>
            </ul>
        </MenuCard>
    );
}

export default Menu;