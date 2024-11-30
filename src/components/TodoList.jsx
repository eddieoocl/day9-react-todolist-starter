import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import styles from "./todoList.module.css";
import { LoadingOutlined } from "@ant-design/icons";

const TodoList = (props) => {
    const { loading } = props;

    return (
        <div>
            <h2 className={styles["todo-list-text"]}>Todo List</h2>
            <TodoGenerator />
            {loading ? <LoadingOutlined /> : <TodoGroup />}
        </div>
    );
};

export default TodoList;
