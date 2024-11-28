export const initialState = [];

export const createTodo = (text) => {
    return { id: Date.now(), text: text, done: false };
};

export const todoReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD": {
            return [...state, createTodo(payload)];
        }
        default:
            return state;
    }
};
