import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>

            <Outlet></Outlet>

            <Footer></Footer>            
        </div>
    );
};

export default MainLayout;