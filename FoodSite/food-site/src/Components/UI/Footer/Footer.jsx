import classes from './Footer.module.css';

const Footer=()=>{
    const currentYear=new Date();
    return(
        <footer className={classes.footer}>            
            Copyright &copy; &nbsp;{currentYear.getFullYear()} 
            &nbsp;All Rights reserved &nbsp;|&nbsp; Spifos.com
        </footer>
    );
}
export default Footer;