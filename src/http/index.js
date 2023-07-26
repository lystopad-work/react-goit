import axios from "axios";

export const BASE_URL = 'https://rickandmortyapi.com/api';

const api = axios.create({
    baseURL: BASE_URL
});

export default api