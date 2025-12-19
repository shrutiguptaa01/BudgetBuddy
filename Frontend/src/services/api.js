import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true // important to send/receive httpOnly cookies
});

export default api;
