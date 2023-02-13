import {useState} from 'react';
import LoginPage from '../src/components/Pages/Login/LoginPage';
import About from '../src/components/Pages/About/About';
  import Expense from './components/Pages/Expense/Expense';

function App(props) {
  const [count, setCount] = useState(0);
   
  const test1=()=>{
    if(count===1){setCount(0);
    }else{setCount(1);}
    
    console.log(">>>>>>>>>>>>>");
    
    }

  return (
    <>
    {/* <LoginPage/> */}
    {/* <About/> */}
    {/* <Expense/> */}
    {/* <Expense/> */}
    
  <button onClick={test1}>test</button>
{count===0 ? <LoginPage/>:<Expense/>}
    </>
  
    
  );
}

export default App;
