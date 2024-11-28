import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import styles from "./todoGroup.module.css";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);

    return (
        <div className={styles["todo-group"]}>
            {state.length !== 0 ? (
                state.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
                <p className={styles["todo-group-no-todo-text"]}>
                    Add the things you need to do today...
                </p>
            )}
        </div>
    );
};

export default TodoGroup;
