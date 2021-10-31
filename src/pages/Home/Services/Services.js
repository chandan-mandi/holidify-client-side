import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceContent from '../../ServiceContent/ServiceContent';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://dry-ravine-15402.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="services-section py-3">
            <Container>
                <h2 className="spe-title text-center my-3 w-50 mx-auto">Popular <span>Cities</span> </h2>
                <div class="title-line text-center">
                    <div class="tl-1"></div>
                    <div class="tl-2"></div>
                    <div class="tl-3"></div>
                </div>
                <p className="text-center px-5 mx-5">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                <Row className="py-5">
                    {
                        services.slice(0, 8).map(service =>
                            <ServiceContent key={service._id} service={service}></ServiceContent>
                        )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;