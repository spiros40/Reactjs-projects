

const Inputs=(props)=>{

    return(
        <div className={props.Div}>
            <label 
                className={props.Labels}
                htmlFor={props.name}>{props.name}</label>  
            <input
                className={props.Inputs}
                id={props.name}
                type={props.Type}
                placeholder={props.Placeholder}
                required/>   
        </div>
    );
}

export default Inputs;