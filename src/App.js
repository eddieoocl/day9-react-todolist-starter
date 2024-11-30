import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./context/todoReducer";
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import DoneList from "./components/DoneList";
import Navigation from "./components/Navigation";
import { getTodos } from "./api/todo";
import { TodoActionTypes } from "./enums/TodoActionTypes";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [loading, setLoading] = useState(true);

    const init = async () => {
        setLoading(true);
        const todoList = await getTodos();
        dispatch({ type: TodoActionTypes.Set, payload: todoList });
        setLoading(false);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="App">
            <TodoContext.Provider value={{ state, dispatch }}>
                <Router>
                    <Navigation />

                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/todo-list" replace />}
                        />
                        <Route
                            path={"/todo-list"}
                            element={<TodoList loading={loading} />}
                        />
                        <Route
                            path={"/done-list"}
                            element={<DoneList loading={loading} />}
                        />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
