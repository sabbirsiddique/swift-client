import Navbar from "../components/navbar/Navbar";
// import ContactNav from "../components/navbar/ContactNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/navbar/HomeComponent/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
            {/* <ContactNav></ContactNav> */}
            <Navbar></Navbar>
            </div>
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;