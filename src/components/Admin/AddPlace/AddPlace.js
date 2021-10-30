import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addPlace', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Tourist Spot Added Successfully')
                reset();
            }
        })
    }
    return (
        <div>
            <div className="booking-form">
            <h2>Add Tourist Spot</h2>
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
        </div>
    );
};

export default AddPlace;