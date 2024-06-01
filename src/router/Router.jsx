import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Shop from "../pages/shop/Shop";
import MyCarts from "../pages/myCarts/MyCarts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<h2>TODO: error page is being created</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/myCart',
                element:<MyCarts></MyCarts>
            }
        ]
    },
]);