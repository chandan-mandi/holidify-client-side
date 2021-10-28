import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section d-flex align-items-center">
            <Container>
                <div className="text-center">
                    <div>
                        <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                        <Form className="d-flex w-50 mx-auto">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Banner;