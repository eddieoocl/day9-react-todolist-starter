import { TodoActionTypes } from "../enums/TodoActionTypes";

export const initialState = [];

export const todoReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case TodoActionTypes.Set: {
            return payload;
        }
        case TodoActionTypes.Add: {
            return [payload, ...state];
        }
        case TodoActionTypes.Remove: {
            return state.filter((todo) => todo.id !== payload);
        }
        case TodoActionTypes.Edit: {
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
