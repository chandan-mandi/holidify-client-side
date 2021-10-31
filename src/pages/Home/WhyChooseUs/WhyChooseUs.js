import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us text-center py-5">
            <div className="container">
                <div className="main-title">
                <h2 className="spe-title text-center my-3 w-50 mx-auto">Why Choose <span>Us</span> </h2>
                <div class="title-line text-center">
                    <div class="tl-1"></div>
                    <div class="tl-2"></div>
                    <div class="tl-3"></div>
                </div>
                <p className="text-center px-5 mx-5">Easy Hotel Booking - Tour and Travel Packages -  Package Reviews and Ratings - Manage your Bookings, Enquiry and Reviews</p>
                </div>
                <Row className="py-4">
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Img className="choose-card-img" variant="top" src="https://i.ibb.co/K9XDsWy/update.png" />
                            <Card.Body>
                                <Card.Title>Every Time Update</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Img className="choose-card-img" variant="top" src="https://i.ibb.co/K5J3c7m/save-money.png" />
                            <Card.Body>
                                <Card.Title>Save Your Money</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Img className="choose-card-img" variant="top" src="https://i.ibb.co/N3KFM3r/24-hours-support.png" />
                            <Card.Body>
                                <Card.Title>24/7 Expert Support</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Img className="choose-card-img" variant="top" src="https://i.ibb.co/mCC3r6y/languages.png" />
                            <Card.Body>
                                <Card.Title>10 Languages Available</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Img className="choose-card-img" variant="top" src="https://i.ibb.co/7rYPmq1/medical-insurance.png" />
                            <Card.Body>
                                <Card.Title>Traveller Insurance</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Img className="choose-card-img" variant="top" src="https://i.ibb.co/yd8LzRP/time.png" alt="time" />
                            <Card.Body>
                                <Card.Title>Great Management</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default WhyChooseUs;