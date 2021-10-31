import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [specificHotel, setSpecificHotel] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.status = "pending";
        data.email = user.email;
        data.hotelId = id;
        data.hotelName = specificHotel.hotelName;
        axios.post('https://dry-ravine-15402.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    window.confirm('Booking Successfully')
                    reset();
                }
            })
    }
    console.log(id);

    useEffect(() => {
        const url = `https://dry-ravine-15402.herokuapp.com/hotels/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSpecificHotel(data))
    }, [])
    console.log(specificHotel);

    return (
        <div className="booking-form">
            <div className="text-center">
            <h2>Fill Out The Form and Make a Booking</h2>
            <h2>You Choose: <span>{specificHotel.hotelName}</span> Hotel</h2>
            {/* <h4>Facilities: <span>{specificHotel.facilities}</span> </h4> */}
            </div>
            <div className="container pt-5">
            <Row className="form-bg ">
                
                <Col md={6} className="main-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" {...register("name", { required: true })} placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" {...register("mobileNumber")} placeholder="Enter Your Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Check-In Date</Form.Label>
                            <Form.Control type="date" {...register("date")} placeholder="Booking Date" />
                        </Form.Group>
                        <input type="submit" value="Booking" className="btn btn-outline-success"/>
                    </form>
                </Col>
               
            </Row>
            </div>
        </div>
    );
};

export default Booking;