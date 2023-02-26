import { useNavigate } from "react-router-dom";
import Menu from "../../Menu/Menu";
import Button from "../../UI/Button";
import Footer from "../../UI/Footer";
import styles from './ErrorPage.module.css';

function ErrorPage(){
    const navigate=useNavigate();
    
    return(
        <>
            <Menu/>
            <div className={styles.body}>
          <p className={styles.p}>
                <h1>“PAGE NOT FOUND” </h1>
                Is probably the most annoying thing to look at, on a screen. 
                This is a page nobody wants to land into. For the longest time this page echoed the words 
                ‘disappointment’ and had always been notoriously referred to as the ‘last page of the internet’.
          </p>  
          
          <div className={styles.bttn}>
            <Button
                name="HOME" 
                ButtonStyle="ErrorB" 
                type="button" 
                onClick={()=>{
                    navigate('/');
                }}/>
            </div>
          
          </div>
            <Footer/>
        </>
    )
}

export default ErrorPage;