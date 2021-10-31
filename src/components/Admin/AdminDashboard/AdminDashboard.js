import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AddPlace from '../AddPlace/AddPlace';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [control, setControl] = useState("allOrders")
    return (
        <div className="admin-dashboard container py-5">
            <Row>
                <Col md={3}>
                    <h2>Dashboard</h2>
                    <div className="all-menu">
                        <li onClick={()=> setControl("allOrders")} className="manage">Manage All Booking</li>
                        <li onClick={()=> setControl("addPlace")} className="addPlace">Add New Tourist Spot</li>
                        {/* <li onClick={()=> setControl("allOrders")}>Manage All Booking</li> */}
                    </div>
                </Col>
                <Col md={9}>
                    {control === "allOrders" && <ManageAllOrders></ManageAllOrders>}
                    {control === "addPlace" && <AddPlace></AddPlace>}
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashboard;