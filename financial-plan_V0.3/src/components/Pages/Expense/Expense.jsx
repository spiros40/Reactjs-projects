import { Fragment } from "react";
import Footer from "../../UI/Footer";
import classes from "./Expense.module.css";
import MenuVertical from "../../Menu/MenuVertical";
import ExpenseHolder from "../../ExpenceHolder/ExpenceHolder";
import Menu from "../../Menu/Menu";


const Expense =(props)=>{
    
    return(
        <Fragment>
                <div className={classes.wrapper}>
                <div className={classes.box1}><Menu/></div>
                <div className={classes.box2}><MenuVertical/></div>
                <div className={classes.box3}>
                <div className={classes.content}>
                <ExpenseHolder
                    key='1'
                    ExpenseTitle={"test"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                />    
                <ExpenseHolder
                    key='2'
                    ExpenseTitle={"test"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                />  
                <ExpenseHolder
                    key='3'
                    ExpenseTitle={"super market"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                 />  
                <ExpenseHolder
                    key='i'
                    ExpenseTitle={"Dei"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                />
                <ExpenseHolder
                    key='4'
                    ExpenseTitle={"name"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                    /> 
                <ExpenseHolder
                    key='5'
                    ExpenseTitle={"test"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                />  
                <ExpenseHolder
                    key='6'
                    ExpenseTitle={"test"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
        /></div></div>
        <div className={classes.box4}>
            </div>
            </div>
                <Footer/> 
            </Fragment>          
    );
}

export default Expense;