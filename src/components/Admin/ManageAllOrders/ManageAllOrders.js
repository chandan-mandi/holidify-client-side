import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://dry-ravine-15402.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        const url = `https://dry-ravine-15402.herokuapp.com/deleteOrder/${id}`
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
                            <td>{index+1}</td>
                            <td>{order.name.toUpperCase()}</td>
                            <td>{order.email}</td>
                            <td>{order.date}</td>
                            <Button onClick={()=> handleDelete(order._id)} variant="warning bg-warning m-1">Delete</Button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;