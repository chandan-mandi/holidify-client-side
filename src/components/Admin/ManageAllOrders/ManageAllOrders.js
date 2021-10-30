import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
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
                            <Button variant="warning bg-warning m-1">Delete</Button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;