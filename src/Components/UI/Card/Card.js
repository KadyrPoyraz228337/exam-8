import React from 'react';
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

const CardElem = (
    {title, text}
) => {
    return (
        <Card className='mb-1'>
            <CardBody>
                <CardText>{text}</CardText>
                <CardTitle>{'― ' + title}</CardTitle>
                <Button color='success' className='mr-2'>Edit</Button>
                <Button color='danger'>Delete</Button>
            </CardBody>
        </Card>
    );
};

export default CardElem;