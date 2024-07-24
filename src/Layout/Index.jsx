import { GlobalStyles } from "../Components/StyledComponents/Global.style";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function Index() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}