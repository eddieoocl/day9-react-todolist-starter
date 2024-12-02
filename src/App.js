import { createContext, useReducer } from "react";
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
import HelpPage from "./components/HelpPage";
import HardStop from "./components/HardStop";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

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
                        <Route path={"/todo-list"} element={<TodoList />} />
                        <Route path={"/done-list"} element={<DoneList />} />
                        <Route path={"/hard-stop"} element={<HardStop />} />
                        <Route path={"/help"} element={<HelpPage />} />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
