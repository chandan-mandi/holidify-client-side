import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    console.log(children);
    const {user, isLoading} = useAuth();
    console.log(user);
    if(isLoading) {
        return  <div className="mx-auto text-center py-5"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <div>
            <Route
            {...rest}
            render={({location}) => user?.email ? children : <Redirect
            to={{
                pathname: "/register",
                state: {from: location}
            }}
            ></Redirect>}
            ></Route>
        </div>
    );
};

export default PrivateRoute;