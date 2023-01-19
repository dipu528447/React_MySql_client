import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddUser from '../Pages/AddUser/AddUser'
import UserList from "../Pages/UserList/UserList";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><Main/></PrivateRoute>, 
      children: [
        {
          path:"/",
          element:<UserList></UserList>,
        },
        {
            path:"/addUser",
            element:<AddUser></AddUser>,
        },
        
      ]     
    },
    {
        path:"/login",
        element:<Login></Login>,
    },
    {
      path:"/unauthorized",
      element:<p>you are unauthorized</p>,
    },
    {
      path:'/*', 
      element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1></div>
    }
  ]);