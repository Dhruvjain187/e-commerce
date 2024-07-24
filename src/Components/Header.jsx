import { Nav } from "./StyledComponents/Nav.style";
import { Flex } from "./StyledComponents/Flex.style";
import {
    Link, NavLink
} from "react-router-dom";


export default function Header() {
    return (
        <>
            <Nav>

                <Flex className="flex1">
                    <NavLink id="logo-link" to="/"><img src="https://breeze.swissupdemo.com/static/version1714766523/frontend/Swissup/breeze-evolution/en_US/images/logo.svg" alt="" /></NavLink>
                </Flex>

                <Flex className="flex2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/men">Mens</NavLink>
                    <NavLink to="/women">Womens</NavLink>
                    <NavLink to="/kid">kids</NavLink>
                </Flex>

                <Flex className="flex3">
                    <input type="checkbox" id="sidebar-active" />
                    <label htmlFor="sidebar-active" className="open-sidebar"><i className="fa-solid fa-bars"></i></label>
                    <Flex className="link-container">
                        <label htmlFor="sidebar-active" className="close-sidebar"><i className=" fa-solid fa-xmark"></i></label>
                        <NavLink id="logo-link" to="/login"><i class="fa-solid fa-right-to-bracket"></i></NavLink>
                        <NavLink id="logo-link" to="/signup"><i class="fa-solid fa-user"></i></NavLink>
                        <NavLink id="logo-link" to="/store"><i class="fa-solid fa-store"></i></NavLink>
                    </Flex>

                </Flex >
            </Nav >
        </>
    );
}