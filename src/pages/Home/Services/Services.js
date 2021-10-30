import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceContent from '../../ServiceContent/ServiceContent';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    
    return (
        <div className="services-section py-3">
            <Container>
                <h2 className="text-center my-5 w-50 mx-auto">Choose The Destination Just Right For Your Vacation</h2>
                <Row>
                    {
                        services.map(service =>
                            <ServiceContent service={service}></ServiceContent>
                        )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;