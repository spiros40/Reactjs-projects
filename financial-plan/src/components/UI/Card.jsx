import React from "react";
import styles from './Card.module.css';

const Card=(props)=>{
    return(
        <div className={`${styles[props.CardStyle]} ${styles.Card}`}>
            {props.children}
        </div>
    )
}

export default Card;