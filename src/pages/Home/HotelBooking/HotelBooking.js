import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HotelContent from '../HotelContent/HotelContent';

const HotelBooking = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('https://dry-ravine-15402.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    return (
        <div>
            <Container>
                <h2 className="spe-title text-center my-3 w-50 mx-auto">Hotels <span>Booking Open Now!</span> </h2>
                <div class="title-line text-center">
                    <div class="tl-1"></div>
                    <div class="tl-2"></div>
                    <div class="tl-3"></div>
                </div>
                <p className="text-center px-5 mx-5">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                <Row className="p-3">
                    {
                        hotels.slice(0, 8).map(hotel =>
                            <HotelContent key={hotel._id} hotel={hotel}></HotelContent>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HotelBooking;