import { Link } from "react-router-dom";
import classes from './Footer.module.css';

const Footer=()=>{
    const currentYear=new Date();
    return(
        <footer className={classes.footer}>            
            Copyright &copy; &nbsp;{currentYear.getFullYear()} 
            &nbsp;All Rights reserved &nbsp;|&nbsp; <Link className={classes.link} to="/">Spifos.com</Link> 
        </footer>
    );
}
export default Footer;