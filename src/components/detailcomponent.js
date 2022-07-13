import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

function DetailComponent(props) {
        console.log(props);
        const { image, name, category, price } = props.component;

        return (
                <div className="col-12 col-md-4 mb-3">
                        <Card>
                                <CardImg src={image} alt={name} />
                                <CardBody>
                                        <CardSubtitle className={"text-gray"}>{category}</CardSubtitle>
                                        <CardTitle>{name}</CardTitle>
                                        <CardText>{price}</CardText>
                                </CardBody>
                        </Card>
                </div>
        );
}

export default DetailComponent;
