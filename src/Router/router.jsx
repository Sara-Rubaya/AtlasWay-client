import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";


const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayout,
   children:[
    {
        index:true,
        Component:Home
    },
    {
      path: '/register',
      Component: Register
    },
    {
      path: '/login',
      Component: Login

    }
   
   ]
  },
]);

export default router;