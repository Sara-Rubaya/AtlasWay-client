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
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner"; 
import { createBrowserRouter } from "react-router";  // ✅ kept as you want


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: () => axios(`${import.meta.env.VITE_API_URL}/packages`),
          element: <Home />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/all-packages',
          loader: () => axios(`${import.meta.env.VITE_API_URL}/packages`),
          element: <AllPackages />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/add-package',
          element: (
            <PrivateRoute>
              <AddPackage />
            </PrivateRoute>
          ),
        },
        {
          path: '/package/:id',
          loader: ({ params }) =>
            axios(`${import.meta.env.VITE_API_URL}/package/${params.id}`),
          element: (
            <PrivateRoute>
              <PackageDetails />
            </PrivateRoute>
          ),
        },
        {
          path: '/my-packages/:email',
          loader: ({ params }) =>
            axios(`${import.meta.env.VITE_API_URL}/my-packages/${params.email}`),
          element: (
            <PrivateRoute>
              <MyPackages />
            </PrivateRoute>
          ),
        },
        {
          path: '/my-bookings',
          element: (
            <PrivateRoute>
              <MyBookings />
            </PrivateRoute>
          ),
        },
      ],
    },
  ],
  {
    hydrationFallbackElement: <LoadingSpinner /> 
  }
);

export default router;
