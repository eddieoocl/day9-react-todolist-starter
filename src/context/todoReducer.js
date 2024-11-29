import { TodoActionTypes } from "../enums/TodoActionTypes";

export const initialState = [];

export const createTodo = (text) => {
    return { id: Date.now(), text: text, done: false };
};

export const todoReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case TodoActionTypes.Set: {
            return payload;
        }
        case TodoActionTypes.Add: {
            return [...state, payload];
        }
        case TodoActionTypes.Remove: {
            return state.filter((todo) => todo.id !== payload);
        }
        case TodoActionTypes.ToggleDone: {
            return state.map((todo) => {
                if (todo.id === payload.id) {
                    todo = payload;
                }
                return todo;
            });
        }
        default:
            return state;
    }
};
