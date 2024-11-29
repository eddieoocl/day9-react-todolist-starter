import { useContext, useState } from "react";
import { TodoContext } from "../App";
import styles from "./todoGenerator.module.css";
import { TodoActionTypes } from "../enums/TodoActionTypes";
import { addTodo } from "../api/todo";
import { PlusOutlined, FileDoneOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const [loadingAdd, setLoadingAdd] = useState(false);

    const { dispatch } = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleAdd = async () => {
        if (text.length === 0) {
            return;
        }

        setLoadingAdd(true);
        const todo = await addTodo(text);
        dispatch({ type: TodoActionTypes.Add, payload: todo });
        setLoadingAdd(false);

        setText("");
    };

    return (
        <div className={styles["todo-generator"]}>
            <div className={styles["todo-input-container"]}>
                <Input
                    className={styles["todo-input"]}
                    type="text"
                    size="medium"
                    onChange={handleChange}
                    value={text}
                    prefix={<FileDoneOutlined />}
                />
            </div>
            <Button
                type="primary"
                className={styles["todo-input-button"]}
                onClick={handleAdd}
                loading={loadingAdd}
            >
                add <PlusOutlined />
            </Button>
        </div>
    );
};

export default TodoGenerator;
