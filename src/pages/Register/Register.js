import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle, user, logout } = useFirebase();
    console.log(user);
    return (
        <div className="registration-section">
            <Container>
                <div className="login-card d-flex align-items-center justify-content-center">
                    <div className="login-card-btn">
                        {!user?.email ?
                            <div>
                                <h4>Login With</h4>
                                <Button onClick={signInUsingGoogle} variant="primary">Sign In Using Google</Button>
                                <p>Don't have an account? <span>Create an account</span></p>
                            </div>
                            :
                            <div>
                                <div className="user-photo">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                                <h4>{user?.displayName}</h4>
                                <Button onClick={logout} variant="primary">Logout</Button>
                                <p>Don't have an account? <Link to="/registration"><span>Create an account</span></Link></p>
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;