import axios from 'axios';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dry-ravine-15402.herokuapp.com/addPlace', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tourist Spot Added Successfully')
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="addPlace-form">
                <h2>Add Tourist Spot</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Place Name</Form.Label>
                            <Form.Control type="text" defaultValue="" {...register("placeName", { required: true })} placeholder="Place Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Tagline</Form.Label>
                            <Form.Control type="text" defaultValue="" {...register("tagline", { required: true })} placeholder="Tagline" />
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                        
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Best Time To Visit</Form.Label>
                            <Form.Control type="text" defaultValue="" {...register("best-time")} placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" defaultValue="" {...register("img", { required: true })} placeholder="Put your Place Photo Link" />
                        </Form.Group>
                        
                    </Row>


                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>About Place</Form.Label>
                        <Form.Control type="textarea" {...register("description", { required: true, minLength: 20 })} placeholder="Write something about this place" />
                    </Form.Group>

                    {/* <input defaultValue="Chandan Mandi" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input type="number" {...register("mobile", { required: true })} placeholder="Mobile Number" />
                    <input type="text" {...register("userName", { required: true })} placeholder="Username/Email" />
                    <input {...register("photo", { required: true })} placeholder="Photo url" /> */}

                    <input type="submit"  className="btn btn-success"/>
                </form>
            </div>
        </div>
    );
};

export default AddPlace;