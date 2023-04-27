import { Fragment } from "react";
import Menu from "../../Menu/Menu";
import Footer from "../../UI/Footer";
import aboutText from "../../../Data/aboutText.js";
import classes from "./About.module.css";

const About =(props)=>{

    return(
            <Fragment>
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