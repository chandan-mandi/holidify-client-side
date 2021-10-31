import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const history = useHistory();
    // console.log(hotels);  
    useEffect(() => {
        fetch('https://dry-ravine-15402.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    const handleDetails = (id) => {
        const uri = `/booking/${id}`;
        history.push(uri)
    }

    return (
        <div className="container">
            <h2 className="text-center py-2">Hotels are Available Here.</h2>
            <Row>
                {
                    hotels.map(hotel =>
                        <Col md={4} className="py-3">
                            <Card>
                                <Card.Img variant="top" src={hotel.img}/>
                                <Card.Body>
                                    <Card.Title>{hotel.hotelName}</Card.Title>
                                    <Card.Text>
                                        <p>{hotel.aboutHotel.slice(0,80)}...</p>
                                        <p>{hotel._id}</p>
                                    </Card.Text>
                                    <Button onClick={() => handleDetails(hotel._id)} variant="warning">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Hotels;