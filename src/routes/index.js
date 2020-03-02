import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';
import Landing from "../pages/Landing";
import Navbar from "../components/common/Navbar";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ToastAlert from "../components/common/ToastAlert";
import Profile from "../pages/Profile";
import CreateGame from "../pages/Games/CreateGame";
import ShowGame from "../pages/Games/ShowGame";
// import SignUp from '../pages/SignUp';
// import Dashboard from '../pages/Dashboard';

function Routes() {
    return (
        <div>
            <ToastAlert/>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/cadastro" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/meu-perfil" component={Profile} isPrivate />
                <Route path="/criar-jogo" component={CreateGame} isPrivate isAdmin />
                <Route path="/detalhes-jogo/:gameID" component={ShowGame} isPrivate />
                {/*<Route path="/dashboard" component={Dashboard} isPrivate />*/}
            </Switch>
        </div>

    );
}

export default Routes;
