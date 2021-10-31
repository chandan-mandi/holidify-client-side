import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HotelContent = (props) => {
    const { _id, img, aboutHotel, hotelName } = props.hotel;
    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/booking/${id}`;
        history.push(uri)
    }
    return (
        <Col md={4} className="py-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{hotelName}</Card.Title>
                    <Card.Text>
                        <p>{aboutHotel.slice(0, 60)}...</p>
                    </Card.Text>
                    <Button onClick={() => handleDetails(_id)} variant="warning">Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HotelContent;