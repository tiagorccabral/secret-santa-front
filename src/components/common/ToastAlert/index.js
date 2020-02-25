import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastAlert () {
    return (
        <ToastContainer
            style={{marginTop: '2em'}}
            autoClose={4000}
        />
    );
}

export default ToastAlert;