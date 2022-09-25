import React from 'react';
import './App.module.css';
import ExpenseHolder from './components/ExpenceHolder/ExpenceHolder';


function App(props) {
  
  return (
  
    <ExpenseHolder
      key="1"
      ExpenseTitle={"test"}
      ExpenseText={"simply dummy text of the printing and typesetting industry."}
      ExpenseAmount={"50"}
      ExpenceCurrency={'$'}
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