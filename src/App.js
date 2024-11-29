import { createContext, useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./context/todoReducer";
import {
    Link,
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import DoneList from "./components/DoneList";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoContext.Provider value={{ state, dispatch }}>
                <Router>
                    <nav>
                        <Link to="/">Home</Link> |{" "}
                        <Link to="/done-list">Done List</Link>
                    </nav>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/todo-list" replace />}
                        />
                        <Route path={"/todo-list"} element={<TodoList />} />
                        <Route path={"/done-list"} element={<DoneList />} />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
