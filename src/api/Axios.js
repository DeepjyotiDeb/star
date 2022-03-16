import axios from "axios";

const service = axios.create({
    timeout: 20000 // request timeout
  });

service.defaults.baseURL = 'https://swapi.py4e.com/api/';
service.defaults.headers.post['Content-Type'] = 'application/json';
export default service;