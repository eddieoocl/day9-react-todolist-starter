import { useContext, useEffect } from "react";
import { getTodos } from "../api/todo";
import { TodoContext } from "../App";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import styles from "./todoList.module.css";
import { TodoActionTypes } from "../enums/TodoActionTypes";

const TodoList = () => {
    const { dispatch } = useContext(TodoContext);

    const init = async () => {
        const todoList = await getTodos();
        dispatch({ type: TodoActionTypes.Set, payload: todoList });
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <h2 className={styles["todo-list-text"]}>Todo List</h2>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
};

export default TodoList;
