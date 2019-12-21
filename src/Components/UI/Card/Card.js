import React from 'react';
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

const CardElem = (
    {title, text}
) => {
    return (
        <Card className='mb-1'>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
};

export default CardElem;