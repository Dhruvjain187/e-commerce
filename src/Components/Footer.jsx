import { Curve } from "./StyledComponents/Curve";
import { FooterContainer } from "./StyledComponents/FooterContainer.style";
import { List } from "./StyledComponents/List.style";
import { Unorder } from "./StyledComponents/Unorder.style";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <Curve />
            <FooterContainer>
                <Unorder start="flex-start" id="invert">
                    <NavLink id="logo-link" to="/"><img src="https://breeze.swissupdemo.com/static/version1714766523/frontend/Swissup/breeze-evolution/en_US/images/logo.svg" alt="" /></NavLink>
                </Unorder>

                <Unorder>
                    <List>Our Products</List>
                    <List>Our Services</List>
                    <List>Our Projects</List>
                    <List>Signage Design</List>
                    <List>Signage FAQs</List>
                </Unorder>
                <Unorder>
                    <List>Sign Supplier</List>
                    <List>Unit 15 Dale Industrial</List>
                    <List>Radcliffe</List>
                    <List>Manchaster</List>
                    <List>M26 1AD</List>
                </Unorder>
                <Unorder>
                    <List>Contact Us</List>
                    <List>0800 133 7555</List>
                    <List>info@signsupplier.co.uk</List>
                    <List><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-square-instagram"></i> <i class="fa-brands fa-whatsapp"></i> <i class="fa-brands fa-telegram"></i></List>
                </Unorder>
            </FooterContainer>
        </>

    );
}