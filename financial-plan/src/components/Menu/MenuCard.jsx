import classes  from "./MenuCard.module.css";


const MenuCart=(props)=>{
    
    return(        
        <div  className={ `${classes[props.classSelection]} ${classes[props.styleSelection]}`} >
            {props.children}
        </div>
    );
}

export default MenuCart;