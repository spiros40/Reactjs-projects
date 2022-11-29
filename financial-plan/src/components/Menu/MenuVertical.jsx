import classes from './MenuVertical.module.css';
import MenuCart from './MenuCard';


const MenuVertical=(props)=>{
    return(
        <MenuCart 
            classSelection='menuVertical' 
            styleSelection='stylePurple'>
                
            <ul className={classes.list}>
                <li>Find</li>
                <li>Add </li>
                <li>Delete</li>
                <li>Settings</li>
                <li>Login in</li>
            </ul>
        </MenuCart>
    );
}


export default MenuVertical;