import React from 'react';
import './App.css';
import Button from './components/UI/Button';
import Card from './components/UI/Card';
import ModalWin from './components/UI/ModalWin';


function App(props) {
  const closeButtonPressed=()=>{
    
  }
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
