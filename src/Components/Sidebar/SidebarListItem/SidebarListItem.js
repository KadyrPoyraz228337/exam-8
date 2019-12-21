import React from 'react';
import {ListGroupItem} from "reactstrap";
import { NavLink} from "react-router-dom";
import './SidebarListItem.css';

const SidebarListItem = (
    {children, to}
) => {
    const path = to === 'All' ? '/' : to;
    return (
        <ListGroupItem className='p-0'>
            <NavLink to={`/${path}`}  className='w-100 h-100 d-inline-block px-4 py-3 link'>
                {children}
            </NavLink>
        </ListGroupItem>

    );
};

export default SidebarListItem;