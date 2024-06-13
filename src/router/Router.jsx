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
import ErrorPage from "../pages/ErrorPage";
import ManageMedicine from "../pages/dashboard/sellerDashboard/ManageMedicine";
import Advertisement from "../pages/dashboard/sellerDashboard/Advertisement";
import BannerAdvertise from "../pages/dashboard/adminDashboard/BannerAdvertise";
import PrivateRoute from "./privateRoute/PrivateRoute";
import CheckOut from "../pages/myCarts/CheckOut";
import Invoice from "../pages/myCarts/Invoice";
import SellerHome from "../pages/dashboard/sellerDashboard/SellerHome";
import PaymentHistory from "../pages/dashboard/sellerDashboard/PaymentHistory";
import SellerReport from "../pages/dashboard/adminDashboard/SellerReport";
import UserPaymentHistory from "../pages/dashboard/userDashbaord/UserPaymentHistory";
import AdminPamentHistory from "../pages/dashboard/adminDashboard/AdminPamentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><MyCarts></MyCarts></PrivateRoute>
            },
            {
                path:'/myCart/checkOut',
                element:<CheckOut></CheckOut>
            },
            {
                path: '/:category',
                element: <SpesicCategoryDetails></SpesicCategoryDetails>
            },
            {
                path:'/invoice',
                element:<Invoice></Invoice>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'adminHome',
                element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
            },
            {
                path: 'manageUsers',
                element: <PrivateRoute><ManageUser></ManageUser></PrivateRoute>
            },
            {
                path: 'manageCategory',
                element: <PrivateRoute><ManageCategory></ManageCategory></PrivateRoute>
            },
            {
                path: 'updateManage/:id',
                element: <PrivateRoute><UpDateMangeCatery></UpDateMangeCatery></PrivateRoute>
            },
            {
                path:'sellerMedicine',
                element:<PrivateRoute><ManageMedicine></ManageMedicine></PrivateRoute>
            },
            {
                path:'sellerAdvertisement',
                element:<PrivateRoute><Advertisement></Advertisement></PrivateRoute>
            },
            {
                path:'bannerAdvertise',
                element:<PrivateRoute><BannerAdvertise></BannerAdvertise></PrivateRoute>
            },
            {
                path:'sellerHome',
                element:<PrivateRoute><SellerHome></SellerHome></PrivateRoute>
            },
            {
                path:'sellerPaymentHistory',
                element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
            {
                path:'salesReport',
                element:<PrivateRoute><SellerReport></SellerReport></PrivateRoute>
            },
            {
                path:'userPaymentHistories',
                element:<PrivateRoute><UserPaymentHistory></UserPaymentHistory></PrivateRoute>
            },
            {
                path:'paymentManagement',
                element:<PrivateRoute><AdminPamentHistory></AdminPamentHistory></PrivateRoute>
            }
        ]
    }
]);