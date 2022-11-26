import React from 'react';
import classes from './App.module.css';
import ExpenseHolder from './components/ExpenceHolder/ExpenceHolder';
import Menu from "./components/Menu/Menu";
import MenuVertical from './components/Menu/MenuVertical';
import Footer from './components/UI/Footer';
  

function App(props) {
  
  return (
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
        <div className={classes.box4}><Footer/></div>
    </div>
    
  );
}

export default App;
