import { React } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './ServiceContent.css';
import img1 from '../../images/travels image/backgrounds/banner-bg.jpg'

const ServiceContent = (props) => {
    const { id, projectName, img, description } = props.service;
    console.log(projectName);

    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/place/${id}`;
        history.push(uri)
    }
    return (

        /*  <Col lg={3} md={4} sm={12} >
             <div onClick={() => handleDetails(id)} className="service-content-card">
                 <Card>
                     <div className="card-img card-img-top">
                         <Card.Img src={img} />
                         <Card.Body>
                             <Card.Title>{projectName}</Card.Title>
                         </Card.Body>
                     </div>
                 </Card>
             </div>
         </Col> */
        <Col lg={3} md={6} className="service-col">
            <div className="service-card">
                <div className="poster">
                    <img src={img} alt="" />
                </div>
                <div className="details">
                    <h2>{projectName} <br /> <span>City of Joy</span> </h2>
                    <div className="rating">

                    </div>
                    <div className="info">
                        <p>{description.slice(0, 25)}...</p>
                    </div>
                    <div className="tags">
                        <span onClick={() => handleDetails(id)} className="fantasy">Read More</span>
                        <Link to="/hotels"><span className="romance">Book Hotel</span></Link>
                    </div>

                    <div className="star">
                        {/* <h4>Cast</h4> */}
                        <ul>
                            <li><img src="https://www.holidify.com/images/cmsuploads/compressed/27151059_20200116111100.jpg" alt="" /></li>
                            <li><img src="https://www.holidify.com/images/cmsuploads/compressed/Screenshot2020-12-28at7.39.58PM_20201228194035.png" alt="" /></li>
                            <li><img src="https://www.holidify.com/images/cmsuploads/compressed/Screenshot2020-12-29at12.10.42PM_20201229121123_20201229121135.png" alt="" /></li>
                            <li><img src="https://q-xx.bstatic.com/xdata/images/hotel/max1200/43008657.jpg?k=2327283101433eff90203b777f0d7ba6bed5838661c51042793e89de4d7b4a61&o=" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Col>





    );
};

export default ServiceContent;