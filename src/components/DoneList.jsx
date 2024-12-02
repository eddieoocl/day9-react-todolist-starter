import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../App";
import { List } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./doneList.module.css";
import { getTodos } from "../api/todo";
import { TodoActionTypes } from "../enums/TodoActionTypes";

const ITEMS_PER_PAGE = 5;

const DoneList = () => {
    const { state, dispatch } = useContext(TodoContext);
    const [loading, setLoading] = useState(true);

    const init = async () => {
        setLoading(true);
        const todoList = await getTodos();
        dispatch({ type: TodoActionTypes.Set, payload: todoList });
        setLoading(false);
    };

    useEffect(() => {
        init();
    }, []);

    const doneList = state.filter((todo) => todo.done);

    return (
        <div>
            <h2 className={styles["done-list-text"]}>Done List</h2>
            {loading ? (
                <LoadingOutlined />
            ) : (
                <List
                    className={styles["done-list"]}
                    pagination={{
                        pageSize: ITEMS_PER_PAGE,
                    }}
                    size="small"
                    bordered
                    dataSource={doneList.map((todo) => todo.text)}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            )}
        </div>
    );
};

export default DoneList;
