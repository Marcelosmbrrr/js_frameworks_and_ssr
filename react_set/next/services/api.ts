import axios from 'axios';
// Nookies lib
import { parseCookies } from 'nookies';

export const api = axios.create({
    baseURL: "http://localhost:3000"
});

// Get authentication cookie for backend requests
// The cookie has a token UUID that would be sent to server to check user authorization

/*
const { cookies } = parseCookies();
const cookie = JSON.parse(cookies['nextauth']);

if (cookie) {
    const tokenUUID = cookie.token.uuid;
    api.defaults.headers['Authorization'] = `Bearer ${tokenUUID}`;
}
*/

