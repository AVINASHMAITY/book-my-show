import axios from 'axios';

const instance = axios.create({ 
  baseURL: process.env.REACT_APP_API_LIVE_PATH
  // baseURL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'? process.env.REACT_APP_API_LOCAL_PATH: process.env.REACT_APP_API_LIVE_PATH, 
  //   timeout: 5000,
});

export default instance;