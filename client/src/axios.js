import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://164.92.174.225/api/v1/',
});

export default axiosInstance;
