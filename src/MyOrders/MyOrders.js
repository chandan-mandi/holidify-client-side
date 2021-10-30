import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])

    const handleDelete = (id) => {
        const url = `http://localhost:5000/deleteOrder/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Deleted Successfully')
                const remaining = orders.filter(order => order?._id !== id)
                setOrders(remaining)
            }
        })
    }
    return (
        <div>
            <h2>Total Booking {orders.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.hotelId}</td>
                            <Button onClick={()=> handleDelete(order._id)} variant="warning bg-warning m-1">Delete</Button>
                        </tr>
                    </tbody>
                ))}
            </Table>
            {/* <p>{singleHotelDetail.hotelName}</p> */}

        </div>
    );
};

export default MyOrders;