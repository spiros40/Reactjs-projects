import classes from './Footer.module.css';

const Footer=()=>{
    const current = new Date();
    return(
        <footer className={classes.footer}>
            Copyright &copy; {current.getFullYear()}
             All rights reserved | www.spifos.com
        </footer>
    );
}

export default Footer;