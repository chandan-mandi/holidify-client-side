import React from 'react';
import Banner from '../Banner/Banner';
import HotelBooking from '../HotelBooking/HotelBooking';
import MobileApp from '../MobileApp/MobileApp';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <HotelBooking></HotelBooking>
            <MobileApp></MobileApp>
        </div>
    );
};

export default Home;