import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TaskInput from './components/TaskInput/TaskInput'
import Tasks from './components/Tasks/Tasks'
import Status from './components/Status/Status'

function App() {
  const [toDoList, setToDoList] = useState([])

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false};
    setToDoList([newTask, ...toDoList])
  }

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) => prevToDoList.map(task => task.taskName === taskName ? {...task, checked: !task.checked} : task))
  }

 const editTask = (prevTaskName, newTaskName) => {
  const updatedList = toDoList.map(task => {
    if (task.taskName === prevTaskName) {
      return { ...task, taskName: newTaskName };
    }
    return task;
  });
  setToDoList(updatedList);
 }


  return (
    <>
      <div className='container'>
        <Header />
        <TaskInput addTask= {addTask} />
        <div className="toDoList">
          <span>Tasks</span>
          <ul className='listItems'>
            {toDoList.map((item, index) => (
              <Tasks 
                key={index} 
                task={item} 
                deleteTask={deleteTask}
                toggleCheck= {toggleCheck}
                editTask={editTask} 
              />
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className='notify'>All Finished!</p>
          ) : null}
        </div>
      </div>
      <Status toDoList={toDoList} />
    </>
  )
}

export default App
