import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../Pages/Home/AddToy/AddToy";
import AllToys from "../Pages/Home/AllToys/AllToys";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/allToys',
        element: <AllToys></AllToys>
      },
      {
        path:'/addToy',
        element: <AddToy></AddToy>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      },
    ]
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
    ]
  },
]);

export default router;
