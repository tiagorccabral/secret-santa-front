import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './routes';

import store from "./store";
import history from "./services/history";
import {SET_CURRENT_USER} from "./actions/types";

const token = localStorage.getItem('jwtToken');
if (token) {
    store.dispatch({type: SET_CURRENT_USER, payload: JSON.parse(localStorage.getItem('userData'))});
}

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes/>
            </Router>
        </Provider>
    );
}

export default App;
