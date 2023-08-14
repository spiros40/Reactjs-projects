import classes from './BodyCard.module.css';

const BodyCard=(props)=>{
    return(
        <div  className={ `${classes[props.classSelection]} ${classes[props.styleSelection]}`} >
            {props.children}
        </div>
    );
}
export default BodyCard