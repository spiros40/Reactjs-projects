import React from 'react';
import './App.module.css';
import ExpenseHolder from './components/UI/ExpenceHolder';


function App(props) {
  
  return (
  
    <ExpenseHolder
      key="1"
      ExpenseTitle={"test"}
      ExpenseText={"asufhpasuhgpsugh"}
      ExpenseAmount={"50"}
    />
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