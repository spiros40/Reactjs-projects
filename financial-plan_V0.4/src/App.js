import LoginPage from '../src/components/Pages/Login/LoginPage';
import AddExpense from './components/Pages/ExpenseFeatures/AddExpence';
import FindExpense from './components/Pages/ExpenseFeatures/FindExpense';
import About from './components/Pages/About/About';
import Expense from './components/Pages/Expense/Expense';
import Delete from './components/Pages/ExpenseFeatures/DeleteExpense'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Settings from './components/Pages/Settings/Settings';


// at the beginning define the routes URLs
const router=createBrowserRouter([
    {path: '/',
     element: <Outlet />,
     errorElement: <ErrorPage />,
     children: [
      {path:'/', element:<Expense/>},
      {path:'/Login', element:<LoginPage/>},
      {path:'/About', element:<About/>},
      {path:'/Settings', element:<Settings/>},
      {path:'/AddExpense', element:<AddExpense/>},
      {path:'/FindExpense', element:<FindExpense/>},
      {path:'/Delete', element:<Delete/>},]},
]);

function App(props) {
   
    return (<RouterProvider router={router}/>);
}

export default App;
