import { useContext, useState } from "react";
import styles from "./todoItem.module.css";
import { TodoContext } from "../App";
import { TodoActionTypes } from "../enums/TodoActionTypes";
import { deleteTodo, editTodo } from "../api/todo";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

const TodoItem = (props) => {
    const { todo } = props;
    const { id, text, done } = todo;

    const [loadingRemove, setLoadingRemove] = useState(false);

    const { dispatch } = useContext(TodoContext);

    const onClickRemove = async () => {
        setLoadingRemove(true);
        await deleteTodo(todo);
        dispatch({ type: TodoActionTypes.Remove, payload: id });
        setLoadingRemove(false);
    };

    const onToggleDone = async () => {
        const newTodo = { ...todo, done: !todo.done };
        const returnedTodo = await editTodo(newTodo);
        dispatch({ type: TodoActionTypes.Edit, payload: returnedTodo });
    };

    return (
        <div className={styles["todo-item"]}>
            <Button
                color="success"
                variant="solid"
                className={styles["todo-remove-button"]}
                onClick={onClickRemove}
                disabled={loadingRemove}
            >
                <EditOutlined />
            </Button>
            <p
                className={styles["todo-text"]}
                done={Boolean(done).toString()}
                onClick={onToggleDone}
            >
                {text}
            </p>
            <Button
                color="danger"
                variant="solid"
                className={styles["todo-remove-button"]}
                onClick={onClickRemove}
                disabled={loadingRemove}
            >
                <DeleteOutlined />
            </Button>
        </div>
    );
};

export default TodoItem;
