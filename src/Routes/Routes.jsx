import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import AddToy from "../Pages/Home/AddToy/AddToy";
import AllToys from "../Pages/Home/AllToys/AllToys";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import MyToys from "../Pages/Home/MyToys/MyToys";
import UpdateToy from "../Pages/Home/UpdateToy/UpdateToy";
import ViewDetails from "../Pages/Home/ViewDetails/ViewDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        path:'/myToys',
        element: <MyToys></MyToys>
      },
      {
        path:'/addToy',
        element: <AddToy></AddToy>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/viewDetails/:id',
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5500/allToys/${params.id}`)
      },
      {
        path:'/update/:id',
        element: <UpdateToy></UpdateToy> ,
        loader: ({params}) => fetch(`http://localhost:5500/allToys/${params.id}`)
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
