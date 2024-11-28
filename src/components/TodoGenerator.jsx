import { useContext, useState } from "react";
import { TodoContext } from "../App";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleAdd = () => {
        if (text.length === 0) {
            return;
        }

        dispatch({ type: "ADD", payload: text });
        setText("");
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange}></input>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default TodoGenerator;
