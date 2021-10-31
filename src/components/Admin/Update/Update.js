import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Update = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://dry-ravine-15402.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully')
                setOrder({})
            }
        })

        
    };
    console.log(order);

    useEffect(()=> {
        const url = `https://dry-ravine-15402.herokuapp.com/orders/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    return (
        <div className="container py-5">
            <h2>update page {id}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" defaultValue={order.name} {...register("name", { required: true })}  />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" defaultValue={order.mobileNumber} {...register("mobileNumber", { required: true })} />
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                        
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Check-In Date</Form.Label>
                            <Form.Control type="date" {...register("date")} placeholder="Booking Date" />
                        </Form.Group>
                    
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" defaultValue={order.email} {...register("email", { required: true })}  />
                        </Form.Group>
                        
                    </Row>

                    <input type="submit" value="Booking" className="btn btn-outline-success"/>
                    
                </form>
        </div>
    );
};

export default Update;