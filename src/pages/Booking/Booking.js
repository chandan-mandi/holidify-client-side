import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.status = "pending";
        data.email = user.email;
        data.hotelId = id;
        axios.post('http://localhost:5000/order', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Booking Successfully')
                reset();
            }
        })
    }
    console.log(id);
    // const [hotelDetals, setHotelDetails] = useState([]);
    const [specificHotel, setSpecificHotel] = useState({});

    /*  useEffect(() => {
         fetch('http://localhost:5000/hotels')
         .then(res => res.json())
         .then(data => setHotelDetails(data))
     },[])
 
     useEffect(() => {
         if(hotelDetals.length>0){
             const matchedData = hotelDetals.find(hotel => hotelDetals._id = id)
             setSpecificHotel(matchedData)
         }
     },[hotelDetals, id]) */

    useEffect(() => {
        const url = `http://localhost:5000/hotels/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSpecificHotel(data))
    }, [])


    return (
        <div className="booking-form">
            <h2>Booking page</h2>
            <p>Hotel id: {id} </p>
            <h2>Name: {specificHotel.hotelName}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="Chandan Mandi" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type="number" {...register("mobile", { required: true })} placeholder="Mobile Number"/> 
                <input type="text" {...register("userName", { required: true })} placeholder="Username/Email"/>
                <input {...register("photo", { required: true })} placeholder="Photo url"/>

                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Booking;