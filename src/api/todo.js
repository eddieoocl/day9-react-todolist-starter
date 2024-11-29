import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c07868020296630a77d.mockapi.io",
    timeout: 5000,
});

export const getTodos = async () => {
    const response = await instance.get("/todo");
    return response.data;
};

export const addTodo = async (text) => {
    const response = await instance.post("/todo", { text: text });
    return response.data;
};

export const editTodo = async (todo) => {
    const response = await instance.put(`/todo/${todo.id}`, todo);
    return response.data;
};

export const deleteTodo = async (todo) => {
    const response = await instance.delete(`/todo/${todo.id}`);
    return response.data;
};
