import axios from 'axios';


export const apiEndPoint = "http://localhost:3000/v1";

export const setAuthToken = token => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

// let jwtToken = localStorage.getItem("jwtToken");

export const apiRequest = axios.create({
    baseURL: apiEndPoint,
    headers: {
        common: {
            Authorization: localStorage.getItem("jwtToken") !== null ? `Bearer ${localStorage.getItem("jwtToken")}`: ''
        }
    }
});