import Navbar from "../components/navbar/Navbar";
import ContactNav from "../components/navbar/ContactNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div>
            <ContactNav></ContactNav>
            <Navbar></Navbar>
            </div>
            
            <Outlet></Outlet>

            
        </div>
    );
};

export default MainLayout;