import React from "react";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";
const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div>
            {toDoList.map((todo) => {
                return <ToDo key={uuidv4()} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />;
            })}
            <button style={{ margin: "20px" }} onClick={handleFilter}>
                Clear Completed
            </button>
        </div>
    );
};

export default ToDoList;
