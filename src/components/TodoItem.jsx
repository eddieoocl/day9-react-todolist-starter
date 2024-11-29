import { useContext } from "react";
import styles from "./todoItem.module.css";
import { TodoContext } from "../App";
import { TodoActionTypes } from "../enums/TodoActionTypes";
import { deleteTodo } from "../api/todo";

const TodoItem = (props) => {
    const { todo } = props;
    const { id, text, done } = todo;

    const { dispatch } = useContext(TodoContext);

    const onClickRemove = () => {
        deleteTodo(todo).then((response) => {
            dispatch({ type: TodoActionTypes.Remove, payload: id });
        });
    };

    const onToggleDone = () => {
        dispatch({ type: TodoActionTypes.ToggleDone, payload: id });
    };

    return (
        <div className={styles["todo-item"]}>
            <p
                className={styles["todo-text"]}
                done={Boolean(done).toString()}
                onClick={onToggleDone}
            >
                {text}
            </p>
            <button
                className={styles["todo-remove-button"]}
                onClick={onClickRemove}
            >
                X
            </button>
        </div>
    );
};

export default TodoItem;
