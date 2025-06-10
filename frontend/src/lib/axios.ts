import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001" //import.meta.env.VITE_API_URL
});

