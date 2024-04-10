import React from "react";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');

    function handleInputValue(e) {
        setTask(e.target.value);
    }

    function handleAddTask(e) {
        e.preventDefault();
        if (task.trim() === '') return;
        addTask(task);
        setTask('');
    }

    return (
        <form className="inputField" onSubmit={handleAddTask}>
            <input 
                type="text" 
                value={task}
                placeholder="Add task"
                onChange= {handleInputValue} />
            <button>
                <MdAddCircleOutline />
            </button>
        </form>
    );
}

export default TaskInput;