import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';
import Landing from "../pages/Landing";
import Navbar from "../components/common/Navbar";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
// import SignUp from '../pages/SignUp';
// import Dashboard from '../pages/Dashboard';

function Routes() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/cadastro" component={Signup}/>
                <Route path="/login" component={Login}/>
                {/*<Route path="/dashboard" component={Dashboard} isPrivate />*/}
            </Switch>
        </div>

    );
}

export default Routes;
