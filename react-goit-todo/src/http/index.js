import axios from "axios";

export const BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
    baseURL: BASE_URL
});
export const token = {
    set: (token) => {
        api.defaults.headers.common.Authorization  = `Bearer ${token}`
    },
    unset: () => {
        api.defaults.headers.common.Authorization = ''
    }
}

export default api