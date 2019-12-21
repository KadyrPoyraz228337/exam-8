import React from 'react';
import {NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

const NavItm = (
    {to, children}
) => {
    return (
        <NavItem className='ml-2'>
            <NavLink to={to}>{children}</NavLink>
        </NavItem>
    );
};

export default NavItm;