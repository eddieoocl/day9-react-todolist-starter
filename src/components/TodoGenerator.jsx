import { useContext, useState } from "react";
import { TodoContext } from "../App";
import styles from "./todoGenerator.module.css";
import { TodoActionTypes } from "../enums/TodoActionTypes";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleAdd = () => {
        if (text.length === 0) {
            return;
        }

        dispatch({ type: TodoActionTypes.Add, payload: text });
        setText("");
    };

    return (
        <div className={styles["todo-generator"]}>
            <div className={styles["todo-input-container"]}>
                <input
                    className={styles["todo-input"]}
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <button className={styles["todo-input-button"]} onClick={handleAdd}>
                add
            </button>
        </div>
    );
};

export default TodoGenerator;
