import { Fragment } from "react";
import Menu from "../Menu/Menu";
import Footer from "../UI/Footer";
import aboutText from "../../Data/aboutText.js";
import classes from "../About/About.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const about =(props)=>{

    return(
        <Route path="/About">
            <Fragment>
                <Menu/>
                <p className={classes.p}>
                    {aboutText()}
                </p>
                <Footer/> 
            </Fragment>          
        </Route>
    );
}

export default about;