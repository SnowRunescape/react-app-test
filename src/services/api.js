import axios from 'axios';

const baseURL = `http://minecart.local/api`;

const api = axios.create({ baseURL });

export default api;