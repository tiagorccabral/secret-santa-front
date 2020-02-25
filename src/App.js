import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './routes';

import store from "./store";
import history from "./services/history";

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
