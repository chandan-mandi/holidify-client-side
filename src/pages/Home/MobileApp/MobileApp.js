import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MobileApp.css';

const MobileApp = () => {
    return (
        <div className="foot-mob-sec">
            <div className="container">
            <Row className="">
                <Col md={6}>
                    <div className="mobile-bg">
                    <img src="http://rn53themes.net/themes/demo/travelz/images/mobile.png" className="" alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <h2>Have you tried our mobile app?</h2>
                    <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="check-icon"></FontAwesomeIcon>  Easy Hotel Booking
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="check-icon"></FontAwesomeIcon>   Tour and Travel Packages</li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="check-icon"></FontAwesomeIcon>  Package Reviews and Ratings</li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="check-icon"></FontAwesomeIcon>  Manage your Bookings, Enquiry and Reviews</li>
                    </ul>
                    <Link to="#"><img src="http://rn53themes.net/themes/demo/travelz/images/android.png" alt="" /> </Link>
                    <Link to="#"><img src="http://rn53themes.net/themes/demo/travelz/images/apple.png" alt="" /> </Link>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default MobileApp;