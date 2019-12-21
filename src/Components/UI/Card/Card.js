import React from 'react';
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";
import {NavLink} from 'react-router-dom'

const CardElem = (
    {title, text, DeleteButtonClick, id}
) => {
    return (
        <Card className='mb-1'>
            <CardBody>
                <CardText>{`"${text}"`}</CardText>
                <CardTitle>{'― ' + title}</CardTitle>
                <NavLink className='mr-2' to={'/quote/edit/' + id }>
                    <Button color='success'>Edit</Button>
                </NavLink>
                <Button onClick={DeleteButtonClick} color='danger'>Delete</Button>
            </CardBody>
        </Card>
    );
};

export default CardElem;