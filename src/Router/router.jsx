import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import AddPackage from "../Pages/AddPackage";
import PrivateRoute from "./PrivateRoutes";
import PackageDetails from "../Pages/PackageDetails";
import MyPackages from "../Pages/MyPackages";
import MyBookings from "../Pages/MyBookings";
import AllPackages from "../Pages/AllPackages";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";


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

    },
    {
      path: '/all-packages',
      Component:AllPackages
    },
    {
      path:'/about',
      Component: About
    },
    {
       path: '/*',
       Component:ErrorPage
    },
    {
      path: '/add-package',
     element: <PrivateRoute>
      <AddPackage></AddPackage>
     </PrivateRoute>
    },
    {
      path: '/package/:id',
      element:<PrivateRoute>
        <PackageDetails></PackageDetails>
      </PrivateRoute>
    },
    {
      path:'/my-packages',
      element:<PrivateRoute>
        <MyPackages></MyPackages>
      </PrivateRoute>
    },
    {
      path:'/my-bookings',
      element:<PrivateRoute>
        <MyBookings></MyBookings>
      </PrivateRoute>
    }
   
   ]
  },
]);

export default router;