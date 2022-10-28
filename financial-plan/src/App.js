import React from 'react';
import './App.module.css';
// import ExpenseHolder from './components/ExpenceHolder/ExpenceHolder';
// import Menu from "./components/Menu/Menu";
// import MenuVertical from './components/Menu/MenuVertical';
import LoginPage from './components/Login/LoginPage';

function App(props) {
  
  return (
    <div>
      <LoginPage/>
      {/* <Menu/>  
      <MenuVertical/>
      <ExpenseHolder
        key="1"
        ExpenseTitle={"test"}
        ExpenseText={"simply dummy text of the printing and typesetting industry."}
        ExpenseAmount={"50"}
        ExpenceCurrency={'$'}
      /> */}
    </div>
  );
}

export default App;




 /* <React.Fragment>
      <Card CardStyle="BackColorLight-Blue">
        <Button
          name="Add expense" 
          ButtonStyle="withBackgroundButton" 
          type="button" 
          onClick={closeButtonPressed}/>
      </Card>       
      <Card CardStyle="BackColorLight-Blue">
        <p>expenses</p>
      </Card>         
      <ModalWin/>            
    </React.Fragment>*/