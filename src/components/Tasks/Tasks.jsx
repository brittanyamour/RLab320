import React, {useState} from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";

const Tasks = ({task, deleteTask, toggleCheck, editTask, saveTask}) => {
    const [editMode, setEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(task.taskName);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        editTask(task.taskName, editedTask);
        setEditMode(false);
    };

  return (
    <>
        <li className="items">
        {editMode ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
            <div className="itemsText">
                <input 
                    type='checkbox' 
                    checked={task.checked} 
                    onChange={() => toggleCheck(task.taskName)}
                />
                <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
            </div>
      )}
            {!editMode && (
            <>
            <button className='edit-icon' onClick={handleEdit} disabled={!task.checked}>
                <MdOutlineEdit />
            </button>
            <button className='delete-icon' onClick={() => deleteTask(task.taskName)} disabled={!task.checked}>
                <MdDeleteSweep />
            </button>
            </>
        )}
        {editMode && <button onClick={handleSave} className='save-icon'><MdOutlineSaveAlt />
        </button>}
        </li>

    </>
  )
}

export default Tasks