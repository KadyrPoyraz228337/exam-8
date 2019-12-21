import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import NavItm from "./NavItm/NavItm";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md" className='mb-2'>
            <Container>
                <NavbarBrand tag={NavLink} to='/'>Quotes central</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItm to={'/'}>Quotes</NavItm>
                    <NavItm to={'/add-quote'}>Submit new quote</NavItm>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;