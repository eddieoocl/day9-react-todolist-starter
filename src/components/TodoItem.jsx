import styles from "./todoItem.module.css";

const TodoItem = (props) => {
    const {
        todo: { text, done },
    } = props;

    const onClickRemove = () => {};

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
