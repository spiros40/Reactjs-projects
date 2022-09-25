import classes  from "./MenuCard.module.css";


const MenuCart=(props)=>{
    return(
        <div className={classes.menuCart} >
            {props.children}
        </div>
    );
}

export default MenuCart;