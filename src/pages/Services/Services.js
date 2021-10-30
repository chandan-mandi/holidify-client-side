import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Container className="py-5">
                <Row>
                    {services.map(service =>
                        <Col lg={3} md={6}  className="service-col">
                            <div className="service-card">
                                <div className="poster">
                                    <img src={service.img} alt="" />
                                </div>
                                <div className="details">
                                    <h2>{service.projectName} <br /> <span>City of Joy</span> </h2>
                                    <div className="rating">

                                    </div>
                                    <div className="info">
                                        <p>{service.description?.slice(0,25)}...</p>
                                    </div>
                                    <div className="tags">
                                        <span className="fantasy">Read More</span>
                                        <span className="romance">Book Hotel</span>
                                    </div>
                                    
                                    <div className="star">
                                        {/* <h4>Cast</h4> */}
                                        <ul>
                                            <li><img src="https://www.holidify.com/images/cmsuploads/compressed/27151059_20200116111100.jpg" alt="" /></li>
                                            <li><img src="https://www.holidify.com/images/cmsuploads/compressed/Screenshot2020-12-28at7.39.58PM_20201228194035.png" alt="" /></li>
                                            <li><img src="https://www.holidify.com/images/cmsuploads/compressed/Screenshot2020-12-29at12.10.42PM_20201229121123_20201229121135.png" alt="" /></li>
                                            <li><img src="https://q-xx.bstatic.com/xdata/images/hotel/max1200/43008657.jpg?k=2327283101433eff90203b777f0d7ba6bed5838661c51042793e89de4d7b4a61&o=" alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )}
                    
                </Row>
            </Container>
        </div>
    );
};

export default Services;