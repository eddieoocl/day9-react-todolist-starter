import { useContext } from "react";
import { TodoContext } from "../App";
import styles from "./doneList.css";

const DoneList = () => {
    const { state } = useContext(TodoContext);

    const doneList = state.filter((todo) => todo.done);

    return (
        <div>
            <h2 className={styles["done-list-text"]}>Done List</h2>
            {doneList.map((todo) => (
                <div>{todo.text}</div>
            ))}
        </div>
    );
};

export default DoneList;
