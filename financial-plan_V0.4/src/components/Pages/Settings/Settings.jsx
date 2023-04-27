import Menu from "../../Menu/Menu";
import Card from "../../UI/Card";
import LoginPage from "../Login/LoginPage";
import Styles from './Settings.module.css';
import Footer from '../../UI/Footer';
import Inputs from '../../UI/Inputs';
import Button from "../../UI/Button";


const Settings=(props)=>{
    return(
        <Card CardStyle='WinBackground'>
            <Menu/>
            <Card>
            <form className={Styles.loginPage}>
                    <div>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    </div>
                    <div className={Styles.ButtonStyle}>
                        <Button 
                            name="Clear" 
                            ButtonStyle="LoginWin" 
                            type="button"
                            />
                        <Button 
                            name="Ok" 
                            ButtonStyle="LoginWin" 
                            type="button"
                            />
                    </div>
                </form>
            </Card>
            <Footer/>
        </Card>
    );
}

export default Settings;