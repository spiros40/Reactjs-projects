import {Fragment,useRef, useState} from 'react'
import classes from './LoginPage.module.css';
import Button from '../../UI/Button';
import Card from '../../UI/Card';


const LoginPage=(props)=>{
    const [userName, setUserName]=useState('Enter Username');    
    const [passWord, setPassWord] = useState('Enter Username');
    const userNameRef=useRef();
    const passWordRef=useRef();
    

    const CancelButtonClicked=(event)=>{
        setUserName("Enter Username");
        setPassWord("Enter PassWord");
        userNameRef.current.value=""; 
        passWordRef.current.value=""; 
    }
    const OkButtonClicked=(event)=>{
        setUserName(userNameRef.current.value);
        setPassWord(passWordRef.current.value);
        console.log("name "+userName);
        console.log("pass "+passWord);
    };
    const NameChangedHandler=(()=>{
    });
    const NameBlurHandler=(()=>{  
    });
    const PassChangedHandler=(()=>{
        
    });
    const PassBlurHandler=(()=>{
        
    });
   
    return(
        <Fragment>            
             <Card CardStyle='LoginWinBackground'>
             <form className={classes.loginPage}>
                <div>
                    <label htmlFor="username" className={classes.Label}>-Login-</label>
                    <input     
                        ref={userNameRef}                
                        type='text'
                        id='username'
                        size="20" 
                        placeholder='Enter Username'                       
                        onClick={NameChangedHandler}
                        onBlur={NameBlurHandler}                   
                    /> 
                </div>
                <div>
                    <input 
                        ref={passWordRef}
                        type='password'
                        id='password'
                        size="20"
                        placeholder='Enter PassWord'
                        onClick={PassChangedHandler}
                        onBlur={PassBlurHandler}
                    />
                </div>
                <div className={classes.ButtonStyle}>
                    <Button 
                        name="Cancel" 
                        ButtonStyle="LoginWin" 
                        type="button"
                        onClick={CancelButtonClicked}/>
                    <Button 
                        name="Ok" 
                        ButtonStyle="LoginWin" 
                        type="button"
                        onClick={OkButtonClicked}/>
                </div>
            </form>
        </Card>        
        </Fragment>
    );
}


export default LoginPage;