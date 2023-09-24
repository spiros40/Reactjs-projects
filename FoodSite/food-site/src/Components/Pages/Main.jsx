import { Fragment } from "react";
import Footer from '../../Components/UI/Footer/Footer';
import MainMenu from '../UI/Menus/MainMenu';
import BodyCard from '../UI/Body/BodyCard';
import SideMenu from '../UI/Menus/SideMenu';
import classes from './Main.module.css';

const Main = (props)=>{

    return(
        <div className={classes.container}>
            <MainMenu/>
            <SideMenu/>
            <BodyCard 
                classSelection='Body' 
                styleSelection='styleWhite'>
                    <h1>asdfasdfadf</h1>
            </BodyCard>
            <Footer/>
        </div>
    );

}

export default Main;