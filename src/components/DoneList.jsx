import { useContext } from "react";
import { TodoContext } from "../App";
import { List } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./doneList.module.css";

const DoneList = (props) => {
    const { state } = useContext(TodoContext);
    const { loading } = props;

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
                        pageSize: 5,
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
