import MenuCard from './MenuCard';
import classes from './MainMenu.module.css';
import { Link,Outlet } from 'react-router-dom';


const MainMenu=(props)=>{

    return(
        <MenuCard
        classSelection='menuHorizontal' 
            styleSelection='styleBlue'>
                <nav className={classes.list}>
                <li className={classes.li}>
                  <Link className={classes.link} to="/">Home</Link>
                </li>
                <li className={classes.li}>
                  <Link className={classes.link} to="/AddExpense">Recipies</Link>
                </li >
                <li className={classes.li}>
                  <Link className={classes.link} to="/FindExpense">Catalog</Link>
                </li>
                <li className={classes.li}>
                  <Link className={classes.link} to="/About">About</Link>
                </li>
            </nav>
            <Outlet />

        </MenuCard>
    );
}

export default MainMenu;