import { useContext } from "react";
import styles from "./todoItem.module.css";
import { TodoContext } from "../App";

const TodoItem = (props) => {
    const {
        todo: { id, text, done },
    } = props;

    const { dispatch } = useContext(TodoContext);

    const onClickRemove = () => {
        dispatch({ type: "REMOVE", payload: id });
    };

    return (
        <div className={styles["todo-item"]}>
            <p className={styles["todo-text"]} done={Boolean(done).toString()}>
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
