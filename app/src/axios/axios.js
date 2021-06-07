import axios from 'axios';

/* Globally */
const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});

export default api;
