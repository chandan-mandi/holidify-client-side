import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-section">
            <Container>
                <h2 className="text-center">Our Services</h2>
                <Row>
                    {
                        services.map(service =>
                            <Col lg={3} md={4} sm={12} >
                                <Link to="/events">
                                <Card>
                                    <div className="card-img card-img-top">
                                        <Card.Img src={service.img} />
                                        <Card.Body>
                                            <Card.Title>{service.projectName}</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                                </Link>
                            </Col>
                        )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;