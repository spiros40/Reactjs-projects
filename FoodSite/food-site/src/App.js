import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import ErrorPage from '././Components/Pages/ErrorPage/ErrorPage';
import './App.css';
import Main from './Components/Pages/Main';


// at the beginning define the routes URLs
const router=createBrowserRouter([
  {path: '/',
   element: <Outlet />,
   errorElement: <ErrorPage />,
   children: [
      {path:'/', element:<Main/>},
    // {path:'/Login', element:<LoginPage/>},
    // {path:'/About', element:<About/>},
    // {path:'/Settings', element:<Settings/>},
    // {path:'/AddExpense', element:<AddExpense/>},
    // {path:'/FindExpense', element:<FindExpense/>},
    // {path:'/Delete', element:<Delete/>},
  ]},
]);

function App(props) {
   
  return (<RouterProvider router={router}/>);
}

export default App;
