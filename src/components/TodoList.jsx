import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import styles from "./todoList.module.css";

const TodoList = () => {
    return (
        <div>
            <p className={styles["todo-list-text"]}>Todo List</p>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
};

export default TodoList;
