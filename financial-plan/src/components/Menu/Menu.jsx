import MenuCard from "./MenuCard";
import classes from "./Menu.module.css";

const Menu=()=>{
    return(
        <MenuCard>
            <ul className={classes.list}>
                <li>Home</li>
                <li>Add Expense</li>
                <li>View Expense</li>
                <li>About</li>
            </ul>
        </MenuCard>
    );
}

export default Menu;