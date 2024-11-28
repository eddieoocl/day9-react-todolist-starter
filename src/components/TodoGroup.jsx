import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import styles from "./todoGroup.module.css";

const TodoGroup = () => {
    const { state, dispatch } = useContext(TodoContext);

    return (
        <div className={styles["todo-group"]}>
            {state.length !== 0 ? (
                state.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
                <p>Add the things you need to do today...</p>
            )}
        </div>
    );
};

export default TodoGroup;
