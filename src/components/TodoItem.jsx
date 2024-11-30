import { useContext, useState } from "react";
import styles from "./todoItem.module.css";
import { TodoContext } from "../App";
import { TodoActionTypes } from "../enums/TodoActionTypes";
import { deleteTodo, editTodo } from "../api/todo";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Button, Input } from "antd";

const TodoItem = (props) => {
    const { todo } = props;
    const { id, text, done } = todo;

    const [loadingRemove, setLoadingRemove] = useState(false);
    const [loadingEdit, setLoadingEdit] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editText, setEditText] = useState("");

    const showModal = () => {
        setEditText(text);
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        if (editText.length === 0) {
            return;
        }
        const newTodo = { ...todo, text: editText };
        setLoadingEdit(true);
        const returnedTodo = await editTodo(newTodo);
        dispatch({ type: TodoActionTypes.Edit, payload: returnedTodo });
        setLoadingEdit(false);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { dispatch } = useContext(TodoContext);

    const onEditChange = (event) => {
        setEditText(event.target.value);
    };

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
            <Modal
                title="Edit"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                loading={loadingEdit}
            >
                <Input
                    className={styles["todo-input"]}
                    type="text"
                    size="medium"
                    onChange={onEditChange}
                    defaultValue={text}
                    value={editText}
                />
            </Modal>
            <Button
                color="success"
                variant="solid"
                className={styles["todo-remove-button"]}
                onClick={showModal}
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
