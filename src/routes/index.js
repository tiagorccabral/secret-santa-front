import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Landing from "../pages/Landing";
// import SignUp from '../pages/SignUp';
// import Dashboard from '../pages/Dashboard';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            {/*<Route path="/dashboard" component={Dashboard} isPrivate />*/}
        </Switch>
    );
}

export default Routes;
