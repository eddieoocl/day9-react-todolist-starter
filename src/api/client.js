import axios from "axios";

export const instance = axios.create({
    baseURL: "https://67495c07868020296630a77d.mockapi.io",
    timeout: 5000,
});
