import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastAlert () {
    return (
        <ToastContainer autoClose={4000} />
    );
}

export default ToastAlert;