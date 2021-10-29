import React, { useState } from "react";
import logo from "./logo-01.svg"
import {Link, NavLink} from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button"
import CartWidget from "../cartWidget/CartWidget"
import "./appNavBar.scss"

function AppNavBar () {
    const [navBarLinks] = useState(["LAPTOPS", "SMARTPHONES", "TABLETS"])

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
                    {
                        navBarLinks.map((navBarLink)=>{
                            return(
                                <NavLink 
                                    className="nav-link" 
                                    to={`/categorias/${navBarLink}`}
                                    key={navBarLink}
                                >
                                    {navBarLink}
                                </NavLink>
                            )
                        })
                    }
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

export default AppNavBar