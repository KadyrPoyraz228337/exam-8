import React from 'react';

import {CATEGOTIES} from "../../constants";
import {ListGroup} from "reactstrap";
import SidebarListItem from "./SidebarListItem/SidebarListItem/SidebarListItem";

const Sidebar = () => {
    return (
        <div>
            <ListGroup>
                {CATEGOTIES.map(category => {
                    return <SidebarListItem to={category.id} to={category.id} key={category.id}>{category.title}</SidebarListItem>
                })}
            </ListGroup>
        </div>
);
};

export default Sidebar;