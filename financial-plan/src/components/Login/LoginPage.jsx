import {Fragment} from 'react'
import classes from './LoginPage.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';


const LoginPage=()=>{
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
            <div className={classes.loginPage}>
                <div>
                    <label htmlFor="username">UserName:</label>
                    <input
                    type='text'
                    id='username'
                    size="20"
                    placeholder="UserName"
                    onClick={NameChangedHandler}
                    onBlur={NameBlurHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">PassWord:</label>
                    <input
                        type='password'
                        id='password'
                        size="20"
                        placeholder="PassWord"
                        onClick={PassChangedHandler}
                        onBlur={PassBlurHandler}
                    />
                </div>
                <div className={classes.ButtonStyle}>
                    <Button 
                        name="Cancel" 
                        ButtonStyle="LoginWin" 
                        type="button"/>
                    <Button 
                        name="Ok" 
                        ButtonStyle="LoginWin" 
                        type="button"/>
                </div>
            </div>
        </Card>        
        </Fragment>
    );
}


export default LoginPage;