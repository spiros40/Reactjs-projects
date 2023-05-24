import {useRef, useState} from 'react'
import classes from './LoginPage.module.css';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import MakeRequest from '../../../Data/ApiGet';
import ApiRequest from '../../../Data/ApiRequest';

const LoginPage=(props)=>{
    const [userName, setUserName]=useState('Enter Username');    
    const [passWord, setPassWord] = useState('Enter Username');
    const userNameRef=useRef();
    const passWordRef=useRef();
    

    const ClearButtonClicked=(event)=>{
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
        //  MakeRequest("https://swapi.dev/api/people/10");
        //MakeRequest(userName);
       ApiRequest(userName);
    
    };
    const makerequestButtonClicked=(event)=>{
        
        //MakeRequest("https://swapi.dev/api/people/10");
        console.log(MakeRequest("http://localhost:3001")+"***************");
        //M1akeRequest(userName);
       //ApiRequest(userName);
    //    console.log("req");
    
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
        
        <Card CardStyle='WinBackground'>
            <Card CardStyle='LoginWinBackground' >
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
                            name="Clear" 
                            ButtonStyle="LoginWin" 
                            type="button"
                            onClick={ClearButtonClicked}/>
                        <Button 
                            name="Ok" 
                            ButtonStyle="LoginWin" 
                            type="button"
                            onClick={OkButtonClicked}/>
                            <Button 
                            name="make a get" 
                            ButtonStyle="LoginWin" 
                            type="button"
                            onClick={makerequestButtonClicked}/>
                    </div>
                </form>
            </Card>      
        </Card>

    );
}


export default LoginPage;