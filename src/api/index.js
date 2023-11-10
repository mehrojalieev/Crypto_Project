import axios from "axios";

const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        "Content-Type": 'application/json'
    },
    timeout: 10000
})


export {apiInstance}