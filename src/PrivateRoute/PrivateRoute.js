import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    console.log(children);
    const {user, isLoading} = useAuth();
    console.log(user);
    if(isLoading) {
        return "loading runing"
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