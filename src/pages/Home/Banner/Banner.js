import React from 'react';
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section d-flex align-items-center">
            <Container>
                <div className="text-center">
                    <Row>
                        <Col md={6}></Col>
                        <Col md={6}>
                            <div>
                                <h2>Amazing Tours And Fun Adventures Waiting For You</h2>
                                <Button variant="outline-success">Find Your Paradise</Button>
                            </div>
                        </Col>
                    </Row>

                </div>

            </Container>
        </div>
    );
};

export default Banner;