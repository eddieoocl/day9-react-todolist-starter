import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import styles from "./todoGroup.module.css";

const TodoGroup = () => {
    const { state, dispatch } = useContext(TodoContext);

    return (
        <div className={styles["todo-group"]}>
            {state.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </div>
    );
};

export default TodoGroup;
