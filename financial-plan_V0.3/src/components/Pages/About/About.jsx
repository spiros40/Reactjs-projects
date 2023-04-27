import { Fragment } from "react";
import Footer from "../../UI/Footer";
import aboutText from "../../../Data/aboutText.js";
import classes from "./About.module.css";
import Menu from "../../Menu/Menu";

const About =(props)=>{

    return(
            <Fragment>
                <Menu/>
                <p className={classes.p}>
                    {aboutText()}
                    {aboutText()}
                    {aboutText()}
                </p>
                <Footer/> 
            </Fragment>          
    );
}

export default About;