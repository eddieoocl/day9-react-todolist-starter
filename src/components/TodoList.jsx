import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import styles from "./todoList.module.css";

const TodoList = () => {
    return (
        <div>
            <h2 className={styles["todo-list-text"]}>Todo List</h2>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
};

export default TodoList;
