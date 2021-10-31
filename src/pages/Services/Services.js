import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);

    const history = useHistory();
    useEffect(() => {

        fetch('https://dry-ravine-15402.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    

    const handleDetails = (id) => {
        const uri = `/place/${id}`;
        history.push(uri)
    }
    return (
        <div>
            <Container className="py-5">
                <Row>
                    {services.map(service =>
                        <Col lg={3} md={6} sm={6} className="service-col">
                            <div className="service-card">
                                <div className="poster">
                                    <img src={service.img} alt="" />
                                </div>
                                <div className="details">
                                    <h2>{service.placeName} <br /> <span>{service.tagline}</span> </h2>
                                    <div className="rating">

                                    </div>
                                    <div className="info">
                                        <p>{service.description?.slice(0, 25)}...</p>
                                    </div>
                                    <div className="tags">
                                        <span onClick={() => handleDetails(service._id)} className="fantasy">Read More</span>
                                        <Link to="/hotels"><span className="romance">Book Hotel</span></Link>
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