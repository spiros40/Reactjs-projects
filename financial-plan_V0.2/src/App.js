import {useState} from 'react';
import LoginPage from './components/Pages/Login/LoginPage';
import AddExpense from './components/Pages/ExpenseFeatures/AddExpence';
import FindExpense from './components/Pages/ExpenseFeatures/FindExpense';
import About from './components/Pages/About/About';
import Expense from './components/Pages/Expense/Expense';
import Menu from './components/Menu/Menu';
import Delete from './components/Pages/ExpenseFeatures/DeleteExpense'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  const [count, setCount] = useState(0);
   
    return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Menu/>}>
          <Route index element={<Expense/>} />
          <Route path="Login Page" element={<LoginPage />} />
          <Route path="FindExpense" element={<FindExpense />} />
          <Route path="AddExpense" element={<AddExpense />} />
          <Route path="Delete" element={<Delete />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
