import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://dry-ravine-15402.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    // delete an order
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, You want to delete?')
        if(proceed) {
            const url = `https://dry-ravine-15402.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = orders.filter(order => order?._id !== id)
                    setOrders(remaining)
                }
            })
        }
       
    }
    const history = useHistory();
    

    const handleUpdate = (id) => {
        const uri = `/update/${id}`;
        history.push(uri)
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
                            <Button onClick={()=> handleUpdate(order._id)} variant="warning bg-warning m-1">Update</Button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;