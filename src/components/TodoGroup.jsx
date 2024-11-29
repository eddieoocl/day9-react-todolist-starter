import { useContext, useState } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import styles from "./todoGroup.module.css";
import { Flex, Pagination, Progress } from "antd";

const ITEMS_PER_PAGE = 5;

const TodoGroup = () => {
    const { state } = useContext(TodoContext);
    const [currentPage, setCurrentPage] = useState(1);

    const todoItems = state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
    ));

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = todoItems.slice(startIndex, endIndex);
    const percentage =
        (state.filter((todo) => todo.done).length / state.length) * 100;

    const handleChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles["todo-group"]}>
            {state.length !== 0 ? (
                <>
                    <Pagination
                        style={{
                            padding: "10px 0px",
                        }}
                        current={currentPage}
                        pageSize={ITEMS_PER_PAGE}
                        total={todoItems.length}
                        onChange={handleChange}
                    />
                    {currentItems}
                    <Flex gap="small" wrap>
                        <Progress
                            style={{
                                padding: "20px 0px",
                            }}
                            type="circle"
                            percent={percentage.toPrecision(3)}
                        />
                    </Flex>
                </>
            ) : (
                <p className={styles["todo-group-no-todo-text"]}>
                    Add the things you need to do today...
                </p>
            )}
        </div>
    );
};

export default TodoGroup;
