import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Shop from "../pages/shop/Shop";
import MyCarts from "../pages/myCarts/MyCarts";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome";
import ManageUser from "../pages/dashboard/adminDashboard/ManageUser";
import ManageCategory from "../pages/dashboard/adminDashboard/ManageCategory";
import UpDateMangeCatery from "../pages/dashboard/adminDashboard/UpDateMangeCatery";
import SpesicCategoryDetails from "../pages/home/homeComponent/SpesicCategoryDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>TODO: error page is being created</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/myCart',
                element: <MyCarts></MyCarts>
            },
            {
                path:'/:category',
                element:<SpesicCategoryDetails></SpesicCategoryDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'adminHome',
                element:<AdminHome></AdminHome>
            },
            {
                path:'manageUsers',
                element:<ManageUser></ManageUser>
            },
            {
                path:'manageCategory',
                element:<ManageCategory></ManageCategory>
            },
            {
                path:'updateManage/:id',
                element:<UpDateMangeCatery></UpDateMangeCatery>
            }
        ]
    }
]);