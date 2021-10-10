import React from "react";
import logo from "./logo-01.svg"
import {Link, NavLink} from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button"
import CartWidget from "../cartWidget/CartWidget"
import "./appNavBar.scss"

class AppNavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            link_1 : "LAPTOPS",
            link_2 : "SMARTPHONES",
            link_3 : "TABLETS",
        }
    }
    render(){

        const {link_1, link_2, link_3} = this.state

        return(
            <Navbar bg="light" fixed="top" expand="xl" className="justify-content-between">
                <Link to="/">
                <img
                    className="logo"
                    alt=""
                    src={logo}
                /> 
                </Link>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5 links">
                        <NavLink 
                            className="nav-link" 
                            to={`/categorias/${link_1}`}
                            >
                            {link_1}
                        </NavLink>
                        <NavLink 
                            className="nav-link" 
                            to={`/categorias/${link_2}`}
                            >
                            {link_2}
                        </NavLink>
                        <NavLink 
                            className="nav-link" 
                            to={`/categorias/${link_3}`}
                            >
                            {link_3}
                        </NavLink>
                    </Nav>
                    <Form className="search">
                        <FormControl type="text" placeholder="Buscar por nombre" className="mr-sm-2" />
                        <Button variant="outline-dark">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <CartWidget />
            </Navbar>
            
        )
    }
}

export default AppNavBar