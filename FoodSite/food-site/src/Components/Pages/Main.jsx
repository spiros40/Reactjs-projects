import { Fragment } from "react";
import Footer from '../../Components/UI/Footer/Footer';
import MainMenu from '../UI/Menus/MainMenu';
import BodyCard from '../UI/Body/BodyCard';

const Main = (props)=>{

    return(
        <div>
            <MainMenu/>
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