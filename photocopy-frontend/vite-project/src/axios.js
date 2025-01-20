// src/axios.js
import axios from 'axios';

axios.defaults.baseURL = 'https://printease1-zcdn.onrender.com'; // Your backend URL
axios.defaults.withCredentials = true; // Ensures cookies are sent with requests

export default axios;
