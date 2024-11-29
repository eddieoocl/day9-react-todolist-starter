import { TodoActionTypes } from "../enums/TodoActionTypes";

export const initialState = [];

export const createTodo = (text) => {
    return { id: Date.now(), text: text, done: false };
};

export const todoReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case TodoActionTypes.Add: {
            return [...state, createTodo(payload)];
        }
        case TodoActionTypes.Remove: {
            return state.filter((todo) => todo.id !== payload);
        }
        case TodoActionTypes.ToggleDone: {
            return state.map((todo) => {
                if (todo.id === payload) {
                    todo = { ...todo, done: !todo.done };
                }
                return todo;
            });
        }
        default:
            return state;
    }
};
