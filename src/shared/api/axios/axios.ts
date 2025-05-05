import axios from "axios";

const REST_API_URL = import.meta.env.VITE_REST_API_URL;
const APP_ID = import.meta.env.VITE_APP_ID;
const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;

const BASE_URL = `${REST_API_URL}/${APP_ID}/${REST_API_KEY}/data`;

export const api = axios.create({
    baseURL: BASE_URL,
});
