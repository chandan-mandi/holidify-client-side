import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle, user, logout } = useAuth();
    console.log(user);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        
            history.push(redirect_uri)
        
    }
    return (
        <div className="registration-section">
            <Container>
                <div className="login-card d-flex align-items-center justify-content-center">
                    <div className="login-card-btn">
                        {!user?.email ?
                            <div>
                                <h4>Login With</h4>
                                <Button onClick={handleGoogleLogin} variant="primary">Sign In Using Google</Button>
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