import React from "react";
import styles from "./Button.module.css";

const Button=(props)=>{
    return(
        <button 
            /*` gives detailed style ${styles[props.ButtonStyle]} 
            gives the basic button style ${styles.button}` */
            className={ `${styles[props.ButtonStyle]} ${styles.Button}`}
            type={props.type || "button"} 
            onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default Button;