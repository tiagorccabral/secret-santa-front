import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const RouteWrapper = ({
         component: Component,
         isPrivate,
         ...rest
     }) => {
    const signed = false;

    if (isPrivate && !signed) {
        return <Redirect to="/"/>;
    }

    if (!isPrivate && signed) {
        return <Redirect to="/dashboard"/>;
    }

    return <Route {...rest} component={Component}/>;
};

export default RouteWrapper;