import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<h2>TODO: error page is being created</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);