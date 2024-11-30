import { useContext, useEffect, useState } from "react";
import { getTodos } from "../api/todo";
import { TodoContext } from "../App";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import styles from "./todoList.module.css";
import { TodoActionTypes } from "../enums/TodoActionTypes";
import { LoadingOutlined } from "@ant-design/icons";

const TodoList = () => {
    const { dispatch } = useContext(TodoContext);
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
        <div>
            <h2 className={styles["todo-list-text"]}>Todo List</h2>
            <TodoGenerator />
            {loading ? <LoadingOutlined /> : <TodoGroup />}
        </div>
    );
};

export default TodoList;
