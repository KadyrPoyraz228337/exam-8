import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import NavItm from "./NavItm/NavItm";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand>Quotes central</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItm to={'/'}>Quotes</NavItm>
                    <NavItm to={'/add-quote'}>Submit new quote</NavItm>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;