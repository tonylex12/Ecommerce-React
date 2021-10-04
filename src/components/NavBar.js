import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import logo from "../../src/logo-01.svg"
import "../../src/Style.scss"
import CartWidget from "./CartWidget"


const NavBar = () => {
    const items = 0
    return(
        <Navbar bg="light" fixed="top">
            <Container>
                <Brand />
            </Container>
                <MenuNav />
                <CartWidget items={items}/>
        </Navbar>
    )
}

const Brand = () => {
    return(
        <Navbar.Brand>
            <img
                alt=""
                src={logo}
            />
        </Navbar.Brand>
    )
}

const MenuNav = () => {
    return(
        <Nav className="me-auto">
            <Nav.Link href="#">INICIO</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="dropdown">
                <NavDropdown.Item href="#">LAPTOPS</NavDropdown.Item>
                <NavDropdown.Item href="#">SMARTPHONES</NavDropdown.Item>
                <NavDropdown.Item href="#">TABLETS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">CONTACTO</Nav.Link>
        </Nav>
    )
}

export default NavBar