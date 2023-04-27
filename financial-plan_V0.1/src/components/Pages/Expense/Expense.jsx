import { Fragment } from "react";
import Menu from "../../Menu/Menu";
import Footer from "../../UI/Footer";
import classes from "./Expense.module.css";
import MenuVertical from "../../Menu/MenuVertical";
import ExpenseHolder from "../../ExpenceHolder/ExpenceHolder";


const Expense =(props)=>{

    return(
        <Fragment>
                <p className={classes.p}>
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
                    ExpenseTitle={"test"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                 />  
                <ExpenseHolder
                    key='i'
                    ExpenseTitle={"test"}
                    ExpenseText={"simply dummy text of the printing and typesetting industry."}
                    ExpenseAmount={"50"}
                    ExpenceCurrency={'$'}
                />
                <ExpenseHolder
                    key='4'
                    ExpenseTitle={"test"}
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
            <Footer/>
            </div>
            </div>
                </p>
                <Footer/> 
            </Fragment>          
    );
}

export default Expense;