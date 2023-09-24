import { Link } from "react-router-dom";
import classes from './Footer.module.css';
import MenuCard from "../Menus/MenuCard";

const Footer=()=>{
    const currentYear=new Date();
    return(
        <MenuCard 
        classSelection='menuHorizontal' 
            styleSelection='styleBlack'>
            <footer className={classes.footer}>            
                Copyright &copy; &nbsp;{currentYear.getFullYear()} 
                &nbsp;All Rights reserved &nbsp;|&nbsp; <Link className={classes.link} to="/">Spifos.com</Link> 
            </footer>
        </MenuCard>
    );
}
export default Footer;