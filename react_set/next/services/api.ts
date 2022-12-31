import axios from 'axios';
// Nookies lib
import { parseCookies } from 'nookies';

export const api = axios.create({
    baseURL: "http://localhost:3000"
});


