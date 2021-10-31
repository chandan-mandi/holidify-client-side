import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './PlaceDetails.css'

const PlaceDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});
    console.log(specificDetail);

    useEffect(() => {
        fetch('https://dry-ravine-15402.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        if(details.length>0){
            const matchedData = details.find(detail => detail._id===id)
            setSpecificDetail(matchedData);
        }
    },[details, id])
    return (
        <Container className="place-details">
            <h2 className="text-center py-2">Plan Your Trip To {specificDetail?.placeName}</h2>
            <Card>
                <div className="card-img card-img-top">
                    <Card.Img src={specificDetail?.img} />
                    <Card.Body>
                        <Card.Title>{specificDetail.placeName}</Card.Title>
                    </Card.Body>
                    <p>{specificDetail.description}</p>
                </div>
            </Card>
        </Container>
    );
};

export default PlaceDetails;