import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import NavItm from "./NavItm/NavItm";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand>Quotes central</NavbarBrand>
                <Nav className="ml-auto" navbar>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;