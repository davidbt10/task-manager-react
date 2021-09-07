import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {

    return (
        <>
            {tasks.map((ptask) => (
                <Task key={ptask.id} task={ptask} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            ))}
        </>
    );
};

export default Tasks;