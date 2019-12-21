import React from 'react';
import {ListGroupItem} from "reactstrap";
import { NavLink} from "react-router-dom";

const SidebarListItem = (
    {children, to}
) => {
    return (
        <ListGroupItem className='p-0'>
            <NavLink to={'/categories/' + to} className='w-100 h-100 d-inline-block px-4 py-3'>
                {children}
            </NavLink>
        </ListGroupItem>

    );
};

export default SidebarListItem;