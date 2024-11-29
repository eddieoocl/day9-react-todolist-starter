import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c07868020296630a77d.mockapi.io",
    timeout: 5000,
});

export const getTodos = async () => {
    const response = await instance.get("/todo");
    return response.data;
};
